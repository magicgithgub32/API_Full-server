const express = require("express");
const {
  getAllUsers,
  register,
  login,
} = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.get("/", [isAuth], getAllUsers);
UserRouter.post("/register", register);
UserRouter.post("/login", login);

module.exports = UserRouter;
