const { Router } = require("express");
const { postActivity } = require("./controllers/post.controller");

const activitiesRouter = Router();

activitiesRouter.route("/").post(postActivity);
activitiesRouter.put('/:id')

module.exports = activitiesRouter;
