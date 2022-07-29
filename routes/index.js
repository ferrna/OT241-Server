var express = require("express");
const news = require("./news");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "ONG" });
});
router.use("/news", news);

module.exports = router;
