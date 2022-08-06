const express = require("express");
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const { addMember, getMembers } = require("../controllers/membersController")
const { uploadImageS3 } = require('../helpers/S3AWService')


router
    .route('/')
    .post(upload.single('image'), async (req, res) => {
        try {
            const image = req.file
            const {name} = req.body
            if (typeof name === 'string') {
                const newMember =  await addMember(name, image.filename)
                const upload = await uploadImageS3(image)
                res.send({
                    newMember,
                    imagePath: `images/${upload.Key}`
                })
                
            }else {
                res.send({message:"Nombre del usuario debe existir y ser un string"})
            }
            
        } catch (e) {
            console.log(e)
        }
    })
    .get(async(req, res) => {
        try {
            const result = await getMembers()
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    })


module.exports = router;