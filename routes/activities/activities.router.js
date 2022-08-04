const { Router } = require("express");
const { postActivity, updateActivity } = require("./controllers/post.controller");

const activitiesRouter = Router();

activitiesRouter.route("/").post(postActivity);
activitiesRouter.put('/:id', updateActivity);

module.exports = activitiesRouter;
