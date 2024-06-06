const { Router } = require("express");
const { sendMail } = require("./controllers/post.controller");

const mails = Router();

mails.route("/:email").post(sendMail);

module.exports = mails;
