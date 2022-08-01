let { body } = require("express-validator");
const { createEntry } = require("../../../controllers/entriesControllers");

const typeMiddleware = async (req, res, next) => {
  req.body.type = "news";
  next();
};

const postNews = [
  body("name", "Ingrese un nombre").exists().notEmpty(),
  body("content", "Ingrese un contenido válido").exists().notEmpty().isLength({ min: 20 }),
  body("image", "Ingrese una url válida").isString(),
  typeMiddleware,
  createEntry,
];

module.exports = { postNews };
