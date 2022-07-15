var express = require('express');
var router = express.Router();

// Get Organizations Route
router
    .route('/:organization/public')
    .get((req, res) => {
        const {organization} = req.params
        res.send({
            name: "",
            image: "",
            phone: "",
            address: "",
            welcomeText: `Hola bienvenido organización ${organization}`
        })
    })



module.exports = router;