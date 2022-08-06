let { Activitiy } = require("../models");
let { body, validationResult } = require("express-validator");


const createActivity = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, content } = req.body;

    let myActivity = await Activity.create({
      name: name,
      content: content,
    });

    return res.json(myActivity);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createActivity,
};
