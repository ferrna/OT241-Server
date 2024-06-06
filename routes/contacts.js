const express = require("express");
const router = express.Router();
const { addContacts, getContacts } = require("../controllers/contactsController");
const isAdmin = require("./common/isAdmin");
const { sendAppreciationMail } = require("./mails/controllers/post.controller");


router
    .route("/")
    .post( async (req, res) => {
        const {name, email, message} = req.body
        if (name && email) {
            const newContact = await addContacts(name, email, message)
            const { msg, status } = await sendAppreciationMail(email)
            res.send({
                newContact,
                message: "Se ha agregado un nuevo contacto",
                mailResponse: { msg, status }
            })
        } else {
            res.send({
                message: "Faltan los datos name y/o email"
            })
        }
    })
    .get(isAdmin, async(req, res) => {
        try {
            const result = await getContacts()
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    })



module.exports = router;