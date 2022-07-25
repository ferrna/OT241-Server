var express = require("express");
var router = express.Router();
const mails = require("./mails/mails.router");
const news = require("./news/news.router");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "ONG" });
});
router.use("/mails", mails);
router.use("/news", news);

module.exports = router;
