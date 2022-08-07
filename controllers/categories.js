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
  .catch( err => {
    if (err.errors[0].validatorKey === "notEmpty") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name cannot be empty");
        default:
          break;
      }
    } else if (err.errors[0].validatorKey === "is_null") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name cannot be null");
        default:
          break;
      }
    } else if (err.errors[0].validatorKey === "is") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name format is incorrect");
        default:
          break;
      }
    }
    else {
      return res.status(400).json(err)
    }
  })
}

const updateCategory = (req, res) => {
  categories.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    })
  .then((update) => {
    if (update[0] === 0) {
      const error = {type: 'Not found', message: "There is not an activity with that ID"};
      throw error;
    } else {
      const category = categories.findByPk(req.params.id);
      return category;
    }
  })
  .then( category => {
    return res.json(category)
  })
  .catch( err => {
    if (err.type === 'Not found') {
      return res.status(400).json(err.message);
    }
    if (err.errors[0].validatorKey === "notEmpty") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name cannot be empty");
        default:
          break;
      }
    } else if (err.errors[0].validatorKey === "is_null") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name cannot be null");
        default:
          break;
      }
    } else if (err.errors[0].validatorKey === "is") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name format is incorrect");
        default:
          break;
      }
    }
    else {
      return res.status(400).json(err)
    }
  })
}

const deleteCategory = () => {}

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory
}