const {members} = require("../models");


//añadir nuevos miembros
const addMember =  async (name, image) => {
    const newMember = await members.create({
       name,
       image,
     });

     return newMember

}

module.exports = {
    addMember
}