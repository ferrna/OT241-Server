const express = require("express");
const router = express.Router();

router
    .route("/")
    .post((req, res) => {
        const {name, email} = req.body
        if (name && email) {
            //add to db logic

            
            res.send ({
                name: name,
                email: email,
                message: "se ingresaron a la db los datos de contacto"

            })
        }else {
            res.send({
                message: "Faltan los datos name y/o email"
            })
        }

    })



module.exports = router;