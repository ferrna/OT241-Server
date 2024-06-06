let jwt = require("jsonwebtoken");
let { User } = require("../../models");

const isAdmin = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) return res.status(401).send("Access denied. No token provided.");

  if (token.includes("Bearer")) {
    token = token.slice(7);
  }

  try {
    const decoded = jwt.verify(token, process.env.PASSWORD_TOKEN);
    req.userId = decoded.id;
    const myUser = await User.findByPk(req.userId);
    
    if (myUser.dataValues.roleId === 1) {
      next();
    } else {
      res.status(401).send("Unauthorized.");
    }
  } catch (error) {
    res.status(400).send("Invalid token.");
  }
};
module.exports = isAdmin;
