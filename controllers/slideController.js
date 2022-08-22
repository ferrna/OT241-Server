const {slides} = require("../models");



const getSlidesInfo = async () => {
    const allSlides = await slides.findAll()
    return allSlides
}

const modifySlides = async (id, image, text, order) => {
    const modify = await slides.update({
        imageUrl: `http://localhost:3000/images/${image}`,
        text: text,
        order: order
    },{
        where: {
            id: id
        }
    })
    return modify
}


module.exports = {
    getSlidesInfo,
    modifySlides
}