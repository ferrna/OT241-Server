var express = require('express');
const {getAllUsers,createUser} = require('../controllers/usersControllers');
var router = express.Router();

let {body,validationResult} = require('express-validator')




/* GET users listing. */
router.get('/', getAllUsers);
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
        .isLength({min:8})
],createUser)


module.exports = router;
