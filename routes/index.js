var express = require("express");
var router = express.Router();
const mails = require("./mails/mails.router");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.use("/mails", mails);

module.exports = router;
