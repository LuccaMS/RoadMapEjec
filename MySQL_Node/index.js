const express = require("express");
const mysql = require("mysql");

const app = express();

const banco_de_dados = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'acme'
});

banco_de_dados.connect();

app.get('/users', (req,res) => {
    const sql = "SELECT * FROM users";
    banco_de_dados.query(sql,(err,result) =>{
        if(err){
            throw err;
        }
        res.send(result);
    })
});

app.listen(5000, () => console.log("Server Started"))