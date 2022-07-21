const express = require("express");
const router = express.Router();
const {findNewsById} = require('../controllers/entriesController')

router
    .route('/:id')
    .get(async(req, res) => {
        const { id } = req.params
        const news = await findNewsById(id)
        res.send({news})
    })



module.exports = router;