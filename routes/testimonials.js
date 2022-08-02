const express = require('express');
const controller = require('../controllers/testimonials.js');

const router = express.Router();

const {
  createTestimonial,
  deleteTestimonial
} = controller;

router.post('/', createTestimonial);
router.delete('/:id', deleteTestimonial);

module.exports = router;