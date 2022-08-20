const { Entries } = require("../models");
let { body, validationResult } = require("express-validator");
const {uploadImageS3, getImageFromS3} = require('../helpers/S3AWService')
//Entries functions

const findNewsById = async (id) => {
  try {
    const news = await Entries.findOne({
      where: {
        id: id,
      },
    });

    return news.dataValues;
  } catch (error) {
    console.log(error);
  }
};

const findEntryByTypeNews = async () => {
  try {
    const type = await Entries.findAll({
      where: {
        type: "news",
      },
    });

    const typeMap = type.map((item) => {
      return { id: item.id, name: item.name, content: item.content, image: item.image, createdAt: item.createdAt };
    });

    return typeMap;
  } catch (error) {
    console.log(error);
  }
};

const deleteNewsById = async (id) => {
  try {
    const borrado = await Entries.destroy({
      where: {
        id: id,
      },
    });

    return borrado
  } catch (error) {
    console.log(error);
    return error
  }
};

const createEntry = async (req, res, next) => {
  try {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   console.log(errors)
    //   return res.status(400).json({ errors: errors.array() });
    // }// volver de ser necesario
    const { name, content } = req.body;
    const image = req.file
    console.log(name, content, image)
    await uploadImageS3(image)
    let newEntry = await Entries.create({
      name,
      content,
      image: image.filename,
      type: "news",
    });

    // if (category) {
    //   const categoryDb = await Category.findOne({ where: { name: category } });
    //   await newEntry.addCategory([categoryDb]);
    // }

    return res.json(newEntry);
  } catch (err) {
    console.log(err);
  }
};

const updateEntry = async (req, res) => {
  try {
    const image  = req.file
    const { name, content } = req.body
    console.log(image, name, content)
    if (image !== undefined) {
      await uploadImageS3(image)
      const response = await Entries.update(
        { image: image.filename, name, content },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      res.status(200).json(response)
      
    } else {
      const response = await Entries.update(
        { name, content },
        {
          where: {
            id: req.params.id,
          },
        }
      )
      res.status(200).json(response)
    }
    
  } catch (error) {
    console.log(error)
  }
};

module.exports = { findNewsById, findEntryByTypeNews, deleteNewsById, createEntry, updateEntry };
