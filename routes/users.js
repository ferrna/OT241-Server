var express = require("express");
const { createUser, getOneUser } = require("../controllers/usersControllers");
var router = express.Router();
<<<<<<< HEAD
let jwt = require('jsonwebtoken')
=======
let verification = express.Router();
let jwt = require("jsonwebtoken");
>>>>>>> dev

let { body, validationResult } = require("express-validator");

<<<<<<< HEAD
let verification = express.Router()
verification.use((req,res,next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if(!token){
        res.status(404).send({error: 'es necesario el token para la authenticacion'})
    }
    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length)
    }
    if(token){
        jwt.verify(token,process.env.PASSWORD_TOKEN,(error,decoded)=>{
            if(error){
                return res.json({message:'token no es valido'})
            }else{
                req.decoded = decoded
                next()
            }
        })
    }
})
=======
verification.use((req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    res.status(404).send({ error: "es necesario el token para la authenticacion" });
  }
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, "juan123", (error, decoded) => {
      if (error) return res.json({ message: "token no es valido" });
      else {
        req.decoded = decoded;
        next();
      }
    });
  }
});

router.post("/register", [
  body("firstName", "Ingrese un nombre").exists().notEmpty().isLength({ max: 15 }),
  body("lastName", "Ingrese un apellido").exists().notEmpty().isLength({ max: 15 }),
  body("email", "Ingrese un email valido").exists().notEmpty().isEmail(),
  body("password", "Ingrese un password valido").exists().notEmpty().isLength({ min: 8 }),
  createUser,
]);
>>>>>>> dev

router.post("/login", [
  body("email", "Ingrese un email valido").exists().notEmpty().isEmail(),
  body("password", "Ingrese un password valido").exists().notEmpty(),
  getOneUser,
]);

<<<<<<< HEAD
router.post('/auth/register',[
    body('firstName','Ingrese un nombre')
        .exists()
        .notEmpty()
        .isLength({max:15}),
    body('lastName','Ingrese un apellido')
        .exists()
        .notEmpty()
        .isLength({max:15}),
    body('email','Ingrese un email valido')
        .exists()
        .notEmpty()
        .isEmail(),
    body('password','Ingrese un password valido') 
        .exists()
        .notEmpty()
        .isLength({min:6})
],createUser)

router.post('/auth/login',[
    body('email','Ingrese un email valido')
    .exists()
    .notEmpty()
    .isEmail(),
body('password','Ingrese un password valido') 
    .exists()
    .notEmpty()
],getOneUser)


router.get('/auth/login',verification,(req,res)=>{
    res.json({ok: true})
})

router.get('/organizations',verification,(req,res)=>{
    res.send('hola')
})
=======
router.get("/login", verification, (req, res) => {
  res.json({ ok: true });
});
>>>>>>> dev

module.exports = router;
