const { Router } = require("express");
const { postNews } = require("./controllers/post.controller");
const {
  findNewsById,
  deleteNewsById,
  findEntryByTypeNews,
  updateEntry,
} = require("../../controllers/entriesController");

const newsRouter = Router();

newsRouter.route("/:id").get(findNewsById).delete(deleteNewsById).put(updateEntry);

newsRouter.route("/").get(findEntryByTypeNews).post(postNews);

module.exports = newsRouter;
