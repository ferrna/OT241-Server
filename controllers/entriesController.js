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


module.exports = {findNewsById}