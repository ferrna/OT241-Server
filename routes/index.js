var express = require("express");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ONG' });
});
router.use("/mails", mails);

module.exports = router;
