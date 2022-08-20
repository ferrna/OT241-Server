const { Entries, categories } = require("../models");
let { body, validationResult } = require("express-validator");

//Entries functions

const findNewsById = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await Entries.findOne({
      where: {
        id: id,
      },
    });
    if (news) {
      return res.status(200).json({ news: news.dataValues });
    } else {
      const error = "There is not an entry with that ID";
      throw new Error(error);
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const findEntryByTypeNews = async (req, res) => {
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

    return res.status(200).json(typeMap);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const deleteNewsById = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteNews = await Entries.destroy({
      where: {
        id: id,
      },
    });

    return res.status(200).json({ deleted: deleteNews });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const createEntry = async (req, res) => {
  try {
    /* Validation body errors */
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
      const categoryDb = await categories.findOne({ where: { name: category } });
      await newEntry.addCategory([categoryDb]);
    }
    return res.status(200).json(newEntry.dataValues);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

const updateEntry = async (req, res) => {
  try {
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
  }
};

module.exports = { findNewsById, findEntryByTypeNews, deleteNewsById, createEntry, updateEntry };
