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

const createCategory = (req, res) => {}

module.exports = {
  getCategories,
  createCategory
}