const { Router } = require("express");
// const { postNews } = require("./controllers/post.controller");
const {
  findNewsById,
  deleteNewsById,
  findEntryByTypeNews,
  updateEntry,
  createEntry
} = require("../../controllers/entriesController");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const {uploadImageS3, getImageFromS3} = require('../../helpers/S3AWService')

const newsRouter = Router();

newsRouter
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const news = await findNewsById(id);
    res.send({ news });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    const deleteNews = await deleteNewsById(id);
    res.send({deleted: deleteNews});
  })
  .put(upload.single('image'), updateEntry);

newsRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const type = await findEntryByTypeNews();
      res.send(type);
    } catch (error) {
      console.log(error);
    }
  })
  .post(upload.single('image'),createEntry);

module.exports = newsRouter;
