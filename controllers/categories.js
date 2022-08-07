const { Categories } = require('../models')

const getCategories = (req, res) => {
  const categories = Categories.FindAll({
    attributes: ['name']
  })
  .then(res => {
    return res.json(categories)
  })
  .catch(err => {
    return err
  })
}

module.exports = {
  getCategories
}