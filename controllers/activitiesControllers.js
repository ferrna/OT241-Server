const { activities } = require("../models");
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

const updateActivity = (req, res, next) => {
  activities
    .update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((update) => {
      if (update[0] === 0) {
        const error = "There is not an activity with that ID";
        throw error;
      } else {
        const activity = activities.findByPk(req.params.id);
        return activity;
      }
    })
    .then((activity) => {
      return res.json(activity);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};

const findActivityById = async (id) => {
  const activityById = await activities.findAll({
    where: {
      id: id,
    },
  });

  return activityById;
};

const getActivities = async (req, res, next) => {
  activities
    .findAll()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      return res.status(401).json({ msg: err });
    });
};

const deleteActivity = (req, res) => {
  activities
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((deleted) => {
      if (deleted === 0) {
        throw "There's not a category with the specified ID";
      }
      return res.json("Deleted succesfully");
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
};

module.exports = {
  createActivity,
  updateActivity,
  findActivityById,
  getActivities,
  deleteActivity,
};
