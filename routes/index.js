var express = require("express");
const mails = require("./mails/mails.router");
const news = require("./news/news.router");
const users = require("./users/users.router");
const organizationRouter = require("./organizations");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "ONG" });
});
router.use("/mails", mails);
router.use("/news", news);
router.use("/users", users);
router.use("/organization", organizationRouter);

module.exports = router;
