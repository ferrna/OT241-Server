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

const createCategory = (req, res) => {
  categories.create({...req.body})
  .then( newCategory => {
    return res.json(newCategory)
  })
  .catch( error => {
    return error
  })
}

module.exports = {
  getCategories,
  createCategory
}