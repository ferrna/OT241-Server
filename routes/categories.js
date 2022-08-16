const express = require("express");
const controller = require("../controllers/categories.js");

const router = express.Router();

const { getCategories, createCategory, deleteCategory, updateCategory, findCategoryById } =
  controller;

router.get("/", getCategories);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.get("/:id", findCategoryById);

module.exports = router;
