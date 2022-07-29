const { Router } = require("express");
const { postNews } = require("./controllers/post.controller");
const { getNews } = require("./controllers/get.controller");

const news = Router();

news.route("/").post(postNews);
news.use("/", getNews);

module.exports = news;
