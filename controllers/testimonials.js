const { Testimonials } = require('../models');

const createTestimonial = async (req,res) => {
  try {
    let { name, imageUrl, content } = req.body
    let newTestimonial = await Testimonials.create({
      name,
      imageUrl,
      content
    })
    return res.json(newTestimonial)
  } catch(err){
    console.log(err)
    return err
  }
}

module.exports = {
  createTestimonial
}