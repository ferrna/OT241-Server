const { Entries, categories } = require("../models");
let { body, validationResult } = require("express-validator");
const { uploadImageS3 } = require('../helpers/S3AWService')
//Entries functions

const findNewsById = async (id) => {

  try {
    const news = await Entries.findOne({
      where: {
        id: id,
      },
    });
    if (news) {
      return news ;
    } else {
      const error = "There is not an entry with that ID";
      throw new Error(error);
    }
  } catch (error) {
    return { msg: error.message };
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
      return {
        id: item.id,
        name: item.name,
        content: item.content,
        image: item.image,
        createdAt: item.createdAt,
      };
    });

    return typeMap;
  } catch (error) {
    return { msg: error.message };
  }
};

const deleteNewsById = async (id) => {

  try {
    const deleteNews = await Entries.destroy({
      where: {
        id: id,
      },
    });

    return { deleted: deleteNews };
  } catch (error) {
    return { msg: error.message };
  }
};

const createEntry = async (req, res) => {
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

    return newEntry;
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
/*
    const { id } = req.params;
    const exists = await Entries.findByPk(id);
    if (!exists) {
      const error = "There is not an entry with that ID";
      throw new Error(error);
    }

    const update = await Entries.update(
      { ...req.body },
      {
        where: {
          id: id,
        },
      }
    );
    if (update) {
      const updatedNews = await Entries.findByPk(id);
      return res.status(200).json(updatedNews);
    } else {
      const error = "Error: News could not be updated";
      throw new Error(error);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
*/
  }
};

module.exports = { findNewsById, findEntryByTypeNews, deleteNewsById, createEntry, updateEntry };
