const express = require("express");
const isAuth = require("../middlewares/auth.middleware");

const {
  getAllUsers,
  register,
  login,
  checkSession,
} = require("../controllers/user.controller");

const UserRouter = express.Router();

UserRouter.get("/", [isAuth], getAllUsers);
UserRouter.post("/checksession", [isAuth], checkSession);
UserRouter.post("/register", register);
UserRouter.post("/login", login);

module.exports = UserRouter;
