const express = require('express');
const controller = require('../controllers/testimonials.js');

const router = express.Router();

const {
  createTestimonial,
  deleteTestimonial,
  updateTestimonial,
  getAllTestimonials,
  getTestimonialsById
} = controller;

router.get('/',getAllTestimonials)
router.get('/:id',getTestimonialsById)
router.post('/', createTestimonial);
router.put('/:id', updateTestimonial);
router.delete('/:id', deleteTestimonial);

module.exports = router;