const {Social} = require('../models')


let getAllSocials = async (req,res) => {

    let allSocials = await Social.findAll()

    res.json(allSocials)
}

module.exports = {
    getAllSocials
}