const { Router } = require("express");
const { getAllUsers } = require("./controllers/getAll.controller");
const isAdmin = require("../common/isAdmin");

const users = Router();

users.route("/all").get([isAdmin, getAllUsers]);

module.exports = users;
