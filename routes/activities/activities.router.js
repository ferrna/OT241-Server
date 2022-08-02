const { Router } = require("express");
const { postActivity } = require("./controllers/post.controller");

const activitiesRouter = Router();

activitiesRouter.route("/").post(postActivity);

module.exports = activitiesRouter;
