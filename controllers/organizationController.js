const {Public} = require('../models');
const {Social} = require('../models')

const getOrganizationPublic = async (id) => {
    const publicOrganization = await Public.findAll({
        where: {
            id: id
        }
    })

    return publicOrganization
}

const getSocials = async() => {
    const socials = await Social.findAll()
    return socials
}



module.exports = {
    getOrganizationPublic,
    getSocials
  };