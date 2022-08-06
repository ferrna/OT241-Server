const {members} = require("../models");


//añadir nuevos miembros
const addMember =  async (name, image) => {
    const newMember = await members.create({
       name,
       image,
     });

     return newMember

}

const getMembers = async () => {
    const allMembers = await members.findAll();
    return allMembers
  }

module.exports = {
    addMember,
    getMembers
}