const express = require("express");
const news = express.Router();
const { findNewsById, findEntryByTypeNews } = require("../controllers/entriesController");

news.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const news = await findNewsById(id);
  res.send({ news });
});

news.route("/").get(async (req, res) => {
  try {
    const type = await findEntryByTypeNews();
    res.send(type);
  } catch (error) {
    console.log(error);
  }
});

module.exports = news;
