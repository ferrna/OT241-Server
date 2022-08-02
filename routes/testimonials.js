const express = require('express');
const controller = require('../controllers/testimonials.js');

const router = express.Router();

const {
  createTestimonial
} = controller;

router.post('/', createTestimonial);
router.put('/:id');

module.exports = router;