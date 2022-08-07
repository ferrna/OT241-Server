const { Router } = require("express");
const { postActivity } = require("./controllers/post.controller");
const { findActivityById, updateActivity } = require("../../controllers/activitiesControllers");

const activitiesRouter = Router();

activitiesRouter.route("/").post(postActivity);
activitiesRouter.put("/:id", updateActivity);

activitiesRouter.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const activity = await findActivityById(id);
  res.send(activity);
});

module.exports = activitiesRouter;
