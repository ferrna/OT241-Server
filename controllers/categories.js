const { categories } = require('../models')

const getCategories = (req, res) => {
  categories.findAll({
    attributes: ['name']
  })
  .then(data => {
    return res.json(data)
  })
  .catch(err => {
    return err
  })
}

module.exports = {
  getCategories
}