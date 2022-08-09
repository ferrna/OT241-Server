var express = require('express');
var router = express.Router();
const {getOrganizationPublic, getSocials} = require("../controllers/organizationController")

// Get Organizations Route
router
    .route('/:organization/public')
    .get(async (req, res) => {
        const {organization} = req.params
        console.log(organization)
        const publicResult =  await getOrganizationPublic(organization)
        const socialResult = await getSocials()
        const data = {...publicResult, socialResult}
        res.send(data)
    })



module.exports = router;