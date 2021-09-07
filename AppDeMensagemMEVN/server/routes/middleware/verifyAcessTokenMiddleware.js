const Users = require("../../models/users")
const jwt = require("jsonwebtoken")

module.exports = async (req,res,next) => {
    try{
        if(!req.headers['authorization'])
        {
            return res.status(400).json({msg: "Token de acesso não informado..."})
        }
        const token = req.headers['authorization'].split(' ')
        if(token[0] !== "Bearer"){
            return res.status(400).json({msg: "Acess token informado contudo em formato invalido..."})
        }
        const user = await jwt.verify(token[1], 'TOP_SECRET')
        req.body.user = await Users.findOne({username: user.username})
        next()
    }catch(error){
        return res.status(400).json({msg: "Nao foi possivel validar o token..."})
    }
}