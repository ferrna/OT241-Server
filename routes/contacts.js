const express = require("express");
const router = express.Router();
const { addContacts } = require("../controllers/contactsController")

router
    .route("/")
    .post( async (req, res) => {
        const {name, email} = req.body
        if (name && email) {
            const newContact = await addContacts(name, email)
            res.send({
                newContact,
                message: "Se ha agregado un nuevo contacto",
            })
        }else {
            res.send({
                message: "Faltan los datos name y/o email"
            })
        }

    })



module.exports = router;