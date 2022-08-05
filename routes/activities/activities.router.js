const { Router } = require("express");
const { postActivity } = require("./controllers/post.controller");
const {findActivityById} = require("../../controllers/activitiesControllers")

const activitiesRouter = Router();

activitiesRouter.route("/").post(postActivity);

activitiesRouter
                .route('/:id')
                .get(async (req, res) => {
                    const {id} = req.params
                    const activity = await findActivityById(id)
                    res.send(activity)
                })

module.exports = activitiesRouter;
