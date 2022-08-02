const express = require('express');
const controller = require('../controllers/testimonials.js');

const router = express.Router();

const {
  createTestimonial,
  updateTestimonial
} = controller;

router.post('/', createTestimonial);
router.put('/:id', updateTestimonial);

module.exports = router;