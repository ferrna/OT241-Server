const { Router } = require("express");
const { postNews } = require("./controllers/post.controller");
const { getNewsId, getNews } = require("./controllers/get.controller");

const newsRouter = Router();

newsRouter.route("/").post(postNews);
newsRouter.route("/:id").get(getNewsId);
newsRouter.route("/").get(getNews);

module.exports = newsRouter;
