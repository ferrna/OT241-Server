var express = require("express");
const users = require("./users/users.router");
var router = express.Router();
const mails = require("./mails/mails.router");
const news = require("./news/news.router");
const testimonials = require("./testimonials");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "ONG" });
});
router.use("/mails", mails);
router.use("/news", news);
router.use("/users", users);
router.use("/testimonials", testimonials)

module.exports = router;
