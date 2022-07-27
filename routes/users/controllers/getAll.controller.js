let { User } = require("../../../models");

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (error) {
    console.log(error);
    res.json({ msg: "Could not get data, an error has occurred" });
  }
};

module.exports = { getAllUsers };
