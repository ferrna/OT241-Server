const { Router } = require("express");
const { postNews } = require("./controllers/post.controller");
const {
  findNewsById,
  deleteNewsById,
  findEntryByTypeNews,
  updateEntry
} = require("../../controllers/entriesController");

const newsRouter = Router();

newsRouter
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const news = await findNewsById(id);
    res.send({ news });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const deleteNews = await deleteNewsById(id);
    res.send(deleteNews);
  })
  .put(updateEntry);

newsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const type = await findEntryByTypeNews();
      res.send(type);
    } catch (error) {
      console.log(error);
    }
  })
  .post(postNews);

module.exports = newsRouter;
