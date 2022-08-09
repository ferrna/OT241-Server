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
      return { id: item.id, name: item.name, image: item.image, createdAt: item.createdAt };
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

const updateEntry = (req, res) => {
  Entries.update(
    { ...req.body },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((update) => {
      if (update[0] === 0) {
        const error = "There is not an entry with that ID";
        throw error;
      } else {
        const entry = Entries.findByPk(req.params.id);
        return entry;
      }
    })
    .then((entry) => {
      return res.json(entry);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};

module.exports = { findNewsById, findEntryByTypeNews, deleteNewsById, createEntry, updateEntry };
