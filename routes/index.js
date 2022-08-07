var express = require("express");
var router = express.Router();
const users = require("./users/users.router");
const mails = require("./mails/mails.router");
const news = require("./news/news.router");
const organization = require("./organizations");
const testimonials = require("./testimonials");
const images = require("./images");
const activities = require("./activities/activities.router");
const categories = require("./categories")
const members =  require("./members")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "ONG" });
});
router.use("/users", users);
router.use("/mails", mails);
router.use("/news", news);
router.use("/organization", organization);
router.use("/testimonials", testimonials);
router.use("/images", images);
router.use("/activities", activities);
router.use("/members", members);
router.use("/categories", categories)

module.exports = router;
