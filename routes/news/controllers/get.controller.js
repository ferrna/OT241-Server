const { findNewsById, findEntryByTypeNews } = require("../../../controllers/entriesController");

const getNewsId = async (req, res) => {
  const { id } = req.params;
  const news = await findNewsById(id);
  res.send({ news });
};

const getNews = async (req, res) => {
  try {
    const type = await findEntryByTypeNews();
    res.send(type);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getNewsId, getNews };
