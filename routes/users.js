var express = require("express");
const { createUser, getOneUser } = require("../controllers/usersControllers");
var router = express.Router();
let verification = express.Router();
let jwt = require("jsonwebtoken");

let { body, validationResult } = require("express-validator");

verification.use((req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    res.status(404).send({ error: "es necesario el token para la authenticacion" });
  }
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, "juan123", (error, decoded) => {
      if (error) return res.json({ message: "token no es valido" });
      else {
        req.decoded = decoded;
        next();
      }
    });
  }
});

router.post("/register", [
  body("firstName", "Ingrese un nombre").exists().notEmpty().isLength({ max: 15 }),
  body("lastName", "Ingrese un apellido").exists().notEmpty().isLength({ max: 15 }),
  body("email", "Ingrese un email valido").exists().notEmpty().isEmail(),
  body("password", "Ingrese un password valido").exists().notEmpty().isLength({ min: 8 }),
  createUser,
]);

router.post("/login", [
  body("email", "Ingrese un email valido").exists().notEmpty().isEmail(),
  body("password", "Ingrese un password valido").exists().notEmpty(),
  getOneUser,
]);

router.get("/login", verification, (req, res) => {
  res.json({ ok: true });
});

module.exports = router;
