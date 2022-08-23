const express = require("express");
const router = express.Router();
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const { addMember, getMembers,editMember,deleteMember,getMembersById } = require("../controllers/membersController")
const { uploadImageS3 } = require('../helpers/S3AWService')


router
    .route('/')
    .post(upload.single('image'), async (req, res) => {
        try {
            const image = req.file
            const {name, role} = req.body
            if (typeof name === 'string') {
                const newMember =  await addMember(name, role, image.filename)
                const upload = await uploadImageS3(image)
                res.status(201).send({
                    newMember,
                    imagePath: `images/${upload.Key}`
                })
                
            }else {
                res.status(400).send({message:"Nombre del usuario debe existir y ser un string"})
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
router
    .route('/:id')
    .get(async (req,res)=>{
        try{
            const {id} = req.params

            let myMember = await getMembersById(id)

            res.json(myMember)

        }catch(err){
            console.log(err)
        }
    })
    .put(upload.single('image'), async (req, res) => {
        try {
            const {id} = req.params
            const image = req.file
            const {name} = req.body
            if (typeof name === 'string') {
                const newMember =  await editMember(name, image.filename,id)
                const upload = await uploadImageS3(image)
                res.status(200).send({
                    newMember,
                    imagePath: `images/${upload.Key}`
                })
                
            }else {
                res.status(401).send({message:"Nombre del usuario debe existir y ser un string"})
            }
            
        } catch (e) {
            console.log(e)
            let error = e
            if(error){
                res.status(404)
                res.send({error: "The user not exist"})
            }
        }
    })
    .delete(async (req,res) => {
        try{
            let {id} = req.params

            await deleteMember(id)

            res.status(200).json({message: 'User Delete success'})
        }catch(err){
            let error = err
            if(error){
                res.status(404).send({error: "The user not exist"})
            }
        }
    })

module.exports = router;