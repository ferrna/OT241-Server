const { Entries } = require('../models')

//Entries functions

const findNewsById = async (id) => {
    try {
       const news = await Entries.findAll({
            where: {
              id: id
            }
          })

          return news
    } catch (error) {
        console.log(error)
    }
}

const findEntryByTypeNews = async () => {
  try {
     const type = await Entries.findAll({
          where: {
            type: "news"
          }
        })

      const typeMap = type.map((item) => {
          return {name: item.name, image: item.image, createdAt: item.createdAt}
      })

        return typeMap
  } catch (error) {
      console.log(error)
  }
}

const deleteNewsById = (id) => {
  try {
    const borrado = await Entries.destroy({
        where: {
            id: id
        }
    })
    
} catch (error) {
    console.log(error)
}
}


module.exports = {findNewsById, findEntryByTypeNews, deleteNewsById}