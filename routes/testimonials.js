const express = require('express');
const controller = require('../controllers/testimonials.js');

const router = express.Router();

const {
  createTestimonial,
  deleteTestimonial,
  updateTestimonial
} = controller;

router.post('/', createTestimonial);
router.put('/:id', updateTestimonial);
router.delete('/:id', deleteTestimonial);

module.exports = router;