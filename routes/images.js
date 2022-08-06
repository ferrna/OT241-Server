const express = require("express");
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const {uploadImageS3, getImageFromS3} = require('../helpers/S3AWService')

//ruta post para subir imagenes
router
    .route('/')
    .post( upload.single('image'), async (req, res) => {

        try {
            const file = req.file
            console.log(file)
            const info = req.body
            const result = await uploadImageS3(file)
            res.send({
                imagePath: `/images/${result.Key}`,
                info: info
            })
        } catch (e) {
            console.log(e)
        }


    })


//ruta get para consultar imagenes individuales
router
    .route('/:key')
    .get((req, res) => {
        try {
            const { key } = req.params
            const readStream = getImageFromS3(key)
            console.log(readStream)
            readStream.pipe(res)
            
        } catch (e) {
            console.log(e)
        }
    })


module.exports = router