const { Router } = require("express");
const { getAllUsers, deleteUser,getUserById } = require("../../controllers/usersControllers");
const isAdmin = require("../common/isAdmin");

const users = Router();

users.route("/all").get([isAdmin, getAllUsers]);

users.route("/:id").get(getUserById)

users.route("/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.send({ message: `Usuario con id: ${id} ha sido exitosamente borrado` });
  } catch (error) {
    console.log(error);
  }
});

module.exports = users;
