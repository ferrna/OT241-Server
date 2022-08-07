const express = require('express');
const controller = require('../controllers/categories.js');

const router = express.Router();

const {
  getCategories,
  createCategory,
  // deleteCategory,
  // updateCategory
} = controller;

router.get('/', getCategories);
router.post('/', createCategory);
// router.put('/:id', updateCategory);
// router.delete('/:id', deleteCategory);

module.exports = router;