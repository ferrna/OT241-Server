let { activities } = require("../models");
let { body, validationResult } = require("express-validator");

const createActivity = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let { name, content } = req.body;

    let myActivity = await activities.create({
      name: name,
      content: content,
    });

    return res.json(myActivity);
  } catch (err) {
    console.log(err);
  }
};

const findActivityById = async(id) => {
  const activityById = await activities.findAll({
    where: {
      id: id
    }
  })

  return activityById

}

module.exports = {
  createActivity,
  findActivityById
};
