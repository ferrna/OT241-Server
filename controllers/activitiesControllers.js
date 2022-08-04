const { activities } = require("../models");
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

const updateActivity =  (req, res, next) => {
  activities.update({ ...req.body }, {
    where: {
      id: req.params.id
    }
  })
  .then((update) => {
    if (update[0] === 0) {
      throw err
      //return res.status(400).json('There is not an activity with that ID')
    } else {
      return res.json(activities.findByPk(req.params.id))
    }
  })
  .catch(() => {
    return res.status(400).json('There is not an activity with that ID')
  })
};

module.exports = {
  createActivity,
  updateActivity
};
