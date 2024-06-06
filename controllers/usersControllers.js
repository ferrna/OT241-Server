let { User } = require("../models");
let { body, validationResult } = require("express-validator");
let { encrypt, compare } = require("../helpers/handleEncrypt.js");
let jwt = require("jsonwebtoken");

let createToken = require("../helpers/createToken.js");

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  } catch (error) {
    console.log(error);
    res.json({ msg: "Could not get data, an error has occurred" });
  }
};

const createUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let { firstName, lastName, email, password,roleId } = req.body;

    let myPasswordEncrypt = await encrypt(password);

    let myUser1 = await User.findOne({
      where: { email },
    });

    if(myUser1){
      res.json("EL USUARIO YA EXISTE")
    }else{
      let myUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: myPasswordEncrypt,
        roleId: roleId || 2 ,
      });

      req.url = "/login";
      next();
    }


    // login user when register
    //res.json(myUser)
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async(req,res) => {
  try{
    let {id} = req.params

    let myUser = await User.findOne({
      where: {
        id
      }
    })

    console.log(myUser)
    if(myUser) res.json(myUser)
    if(!myUser) throw new Error('Id not exist')
  }catch(err){
    res.status(404).send('id not exist')
  }
}

<<<<<<< HEAD
const createUser = async (req,res,next) => {
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
    
        let {firstName,lastName,email,password} = req.body
        
        let myUser = await User.findOne({
            where:{email}
        })

        let myPasswordEncrypt = await encrypt(password) 
        
        if(myUser != null){
            return res.status(400).send({errors:'The email already register.'})
        }else{
            let myNewUser = await User.create({
                firstName : firstName,
                lastName : lastName,
                email : email,
                password : myPasswordEncrypt,
                roleId : 2
            })
            delete myNewUser.password
            return res.json(myNewUser)
        }
        

    }catch(err){
        console.log(err)
=======
const getOneUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
>>>>>>> dev
    }

    let { email, password } = req.body;
    let myUser = await User.findOne({
      where: { email },
    });
    let checkPassword = await compare(password, myUser.password);

<<<<<<< HEAD
        let {email, password} = req.body
       
        let myUser = await User.findOne({
            where:{email}
        })
        let checkPassword = await compare(password, myUser.password)

        if(!myUser){
            res.status(404)
            res.json({text:'Usuario no encontrado'})
        }
        
        if(checkPassword){
            let myToken = createToken(email)
            res.json({
                data: myUser,
                token: myToken
            })
        }else{
            res.status(404)
            res.json({text:'Contraseña incorrecta'})
        }
    }catch(err){
        console.log(err)
        res.status(404)
        res.json({ok:false})
=======
    if (!myUser) {
      res.status(404);
      res.json({ text: "Usuario no encontrado" });
>>>>>>> dev
    }

    if (checkPassword) {
      let myToken = createToken(myUser.dataValues);
      res.json({
        data: myUser,
        token: myToken,
      });
    } else {
      res.status(404);
      res.json({ text: "Contraseña incorrecta" });
    }
  } catch (err) {
    console.log(err);
    res.status(404);
    res.json({ ok: false });
  }
};

const deleteUser = async (id) => {
  try {
    const borrado = await User.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const updated = await User.update({...req.body},{
      where: {
        id: id,
      },
    });
    if(updated) {
      return res.status(200).json(updated)
    } else {
      const error = "Ha ocurrido un error al actulizar el usuario"
      throw new Error(error)
    }
  } catch (error) {
    return res.status(400).json({msg: error.message})
  }
};

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  getOneUser,
  deleteUser,
  updateUserById
};
