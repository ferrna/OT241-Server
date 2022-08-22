const express = require("express");
const router = express.Router();
const { getSlidesInfo, modifySlides } = require("../controllers/slideController")
const {uploadImageS3} = require('../helpers/S3AWService')


const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

router
    .route("/")
    .get(async (req, res) => {
        try {
            const getAllSlides = await getSlidesInfo()
            res.status(200).send(getAllSlides)
            
        } catch (error) {
            res.status(400).send({message: "Se ha producido un error"})
        }
    })

router
    .route("/:id")
    .put(upload.single('image'), async (req, res) => {
        try {
            const { id } = req.params
            const { text, order } = req.body
            const img = req.file
            console.log(id, text, order, img.filename)
            const image = await uploadImageS3(img)
            const modifyingSlideInfo = await modifySlides(id, img.filename, text, order)
            res.status(201).send({message: "El Slider se ha modificado con éxito"})
            
        } catch (error) {
            res.status(400).send({message: "Se necesita modificar la imagen y los elementos del Slider"})
        }

        
    })









module.exports = router;