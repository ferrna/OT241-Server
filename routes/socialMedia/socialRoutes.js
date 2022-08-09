let express = require('express');
var router = express.Router();

const {getAllSocials } = require('../../controllers/socialsControllers.js')

//Get All Socials Media
router
    .route('/')
    .get(getAllSocials)

module.exports = router;