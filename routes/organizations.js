var express = require('express');
var router = express.Router();
const {getOrganizationPublic, getSocials,updateOrganization} = require("../controllers/organizationController")

// Get Organizations Route
router
    .route('/:organization/public')
    .get(async (req, res) => {
        try {
            const {organization} = req.params
            const publicResult =  await getOrganizationPublic(organization)
            if (publicResult != "") {
                const socialResult = await getSocials()
                const data = {publicResult, socialResult}
                res.status(200).send(data)  
            } else {
                res.status(404).send({message: "No se ha encontrado organización"})
            }
            
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    })
router
    .route('/edit/:id')
    .put(async (req,res)=>{
        try{
            let {id} = req.params

            let {name,image,phone,address,email,welcomeTitle,welcomeText,welcomeImage} = req.body

            let myOrganization = await updateOrganization(id,{name,image,phone,address,email,welcomeTitle,welcomeText,welcomeImage})

            if(myOrganization) res.json({message:'Organization has ready update.'})
        
        }catch(err){
            console.log(err)
        }
    })



module.exports = router;