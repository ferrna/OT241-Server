const { Entries } = require("../models");
let { body, validationResult } = require("express-validator");

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
      return { name: item.name, image: item.image, createdAt: item.createdAt };
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
  } catch (error) {
    console.log(error);
  }
};

const createEntry = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, content, image = "", category, type } = req.body;

    let newEntry = await Entries.create({
      name,
      content,
      image,
      type,
    });

    if (category) {
      const categoryDb = await Category.findOne({ where: { name: category } });
      await newEntry.addCategory([categoryDb]);
    }

    return res.json(newEntry);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { findNewsById, findEntryByTypeNews, deleteNewsById, createEntry };
