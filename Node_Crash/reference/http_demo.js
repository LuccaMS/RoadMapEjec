const http = require("http");

http.createServer((req,res) => {
  res.write("Olá mundo")
  res.end();
}).listen(5000, () => console.log("Server running ... "))