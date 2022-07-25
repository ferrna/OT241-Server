const { Router } = require("express");
const { postNews } = require("./controllers/post.controller");

const news = Router();

news.route("/").post(postNews);

module.exports = news;
