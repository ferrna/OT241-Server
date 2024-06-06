const { categories } = require("../models");

const getCategories = (req, res) => {
  categories
    .findAll()
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => {
      return err;
    });
};

const createCategory = (req, res) => {
  categories
    .create({ ...req.body })
    .then((newCategory) => {
      return res.json(newCategory);
    })
    .catch((err) => {
      if (err.errors[0].validatorKey === "notEmpty") {
        switch (err.errors[0].path) {
          case "name":
            return res.status(400).json("Name cannot be empty");
          default:
            break;
        }
      } else if (err.errors[0].validatorKey === "is_null") {
        switch (err.errors[0].path) {
          case "name":
            return res.status(400).json("Name cannot be null");
          default:
            break;
        }
      } else if (err.errors[0].validatorKey === "is") {
        switch (err.errors[0].path) {
          case "name":
            return res.status(400).json("Name format is incorrect");
          default:
            break;
        }
      } else {
        return res.status(400).json(err);
      }
    });
};

const updateCategory = (req, res) => {
  categories
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
        const error = { type: "Not found", message: "There is not an activity with that ID" };
        throw error;
      } else {
        const category = categories.findByPk(req.params.id);
        return category;
      }
    })
    .then((category) => {
      return res.json(category);
    })
    .catch((err) => {
      if (err.type === "Not found") {
        return res.status(400).json(err.message);
      }
      if (err.errors[0].validatorKey === "notEmpty") {
        switch (err.errors[0].path) {
          case "name":
            return res.status(400).json("Name cannot be empty");
          default:
            break;
        }
      } else if (err.errors[0].validatorKey === "is_null") {
        switch (err.errors[0].path) {
          case "name":
            return res.status(400).json("Name cannot be null");
          default:
            break;
        }
      } else if (err.errors[0].validatorKey === "is") {
        switch (err.errors[0].path) {
          case "name":
            return res.status(400).json("Name format is incorrect");
          default:
            break;
        }
      } else {
        return res.status(400).json(err);
      }
    });
};

const deleteCategory = (req, res) => {
  categories
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

const findCategoryById = (req, res, next) => {
  categories
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((category) => {
      return res.json(category);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
};

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  findCategoryById,
};
