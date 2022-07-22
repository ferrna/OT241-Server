const { Router } = require("express");
const { getAllUsers } = require("./controllers/getAll.controller");
const isAdmin = require("../common/isAdmin");
const { getOneUser } = require("../../controllers/usersControllers");

const users = Router();

users.route("/all").post([isAdmin, getAllUsers]);

module.exports = users;
