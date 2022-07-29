let { Entries } = require("../models");
let { body, validationResult } = require("express-validator");

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

module.exports = {
  createEntry,
};
