let {User} = require('../models')
let {body,validationResult} = require('express-validator')
let {encrypt,compare} = require('../helpers/handleEncrypt.js')

const getAllUsers = async (req,res,next) => {
    try{
        let users = await User.findAll({})
    
        return res.json(users)
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

const createUser = async (req,res,next) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
    
        let {firstName,lastName,email,password} = req.body
        
        let myPasswordEncrypt = await encrypt(password) 

        let myUser = await User.create({
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : myPasswordEncrypt,
            roleId : 2
        })
    
        return res.json(myUser)
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getAllUsers,
    createUser
}
