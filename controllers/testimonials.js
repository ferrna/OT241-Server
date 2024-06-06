const { Testimonials } = require('../models');


const getTestimonialsById = async (req,res) =>{
  try{
    let {id} = req.params
    
    let myTestimonial = await Testimonials.findByPk(id)

    res.json(myTestimonial)
  }catch(err){
    console.log(err)
  }
}

const getAllTestimonials = async (req,res) => {
  try{
    let AllTestimonials = await Testimonials.findAll()

    res.json(AllTestimonials)
  }catch(err){
    if(err){
      res.send("Ocurrio un error: ", err)
    }
  }
}

const createTestimonial = async (req,res) => {
  try {
    const { name, imageUrl, content } = req.body
    const newTestimonial = await Testimonials.create({
      name,
      imageUrl,
      content
    })
    return res.json(newTestimonial)
  } catch(err){
    if (err.errors[0].validatorKey === "notEmpty") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name cannot be empty");
        case 'content':
          return res.status(400).json("Content cannot be empty");
        default:
          break;
      }
    } else if (err.errors[0].validatorKey === "is_null") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name cannot be null");
        case 'content':
          return res.status(400).json("Content cannot be null");
        default:
          break;
      }
    } else {
      return res.status(400).json(err)
      console.log(err)
    }
  }
}

const updateTestimonial = async (req,res) => {
  try {
    const newTestimonial = await Testimonials.update({ ...req.body }, {
      where: {
        id: req.params.id
      }
    })
    if (newTestimonial[0] === 0) {  //Caso en que el ID no exista (Sequelize retorna un array con el numero de rows afectadas)
      return res.status(404).json("There's not a testimonial with the specified ID")
    }
    return res.json(newTestimonial)
  } catch(err){
    if (err.errors[0].validatorKey === "notEmpty") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name cannot be empty");
        case 'content':
          return res.status(400).json("Content cannot be empty");
        default:
          break;
      }
    } else if (err.errors[0].validatorKey === "is_null") {
      switch (err.errors[0].path) {
        case 'name':
          return res.status(400).json("Name cannot be null");
        case 'content':
          return res.status(400).json("Content cannot be null");
        default:
          break;
      }
    } else {
      return res.status(400).json(err)
    }
  }
}

const deleteTestimonial = async (req,res) => {
  try {
    const deletedTestimonial = await Testimonials.destroy({
      where: {
        id: req.params.id
      }
    })
    if (deletedTestimonial === 0) {  //Caso en que el ID no exista (Sequelize retorna el numero de rows afectadas)
      return res.status(404).json("There's not a testimonial with the specified ID")
    }
    return res.json("Deleted succesfully")
  } catch(err) {
      return res.status(400).json(err)
    }
}

module.exports = {
  createTestimonial,
  deleteTestimonial,
  updateTestimonial,
  getAllTestimonials,
  getTestimonialsById
}