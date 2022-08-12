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

const editMember = async (name,image,id) =>{
    let memberExist = await members.findAll({
      where: {
        id
      }
    })
    console.log(memberExist)

    if(memberExist.length === 0) throw Error('El Usurio no existe, porfavor crealo.')

    const newMember = await members.update({name,image},{
      where:{
        id
      }
    })

    if(newMember[0] === 1) {
      return {
        id,
        name,
        image
      }
    }
} 

const deleteMember = async (id) => {
  let memberExist = await members.findAll({
    where: {
      id
    }
  })

  if(memberExist.length === 0) throw Error('El Usurio no existe, porfavor crealo.')

  await members.destroy({where:{id}})

}


module.exports = {
    addMember,
    getMembers,
    editMember,
    deleteMember
}