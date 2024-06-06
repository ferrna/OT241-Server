const { Router } = require("express");
const { postActivity } = require("./controllers/post.controller");
const {
  findActivityById,
  updateActivity,
  getActivities,
  deleteActivity,
} = require("../../controllers/activitiesControllers");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivities);
activitiesRouter.post("/", postActivity);
activitiesRouter.put("/:id", updateActivity);
activitiesRouter.delete("/:id", deleteActivity);

activitiesRouter.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const activity = await findActivityById(id);
  res.send(activity);
});

module.exports = activitiesRouter;
