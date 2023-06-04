const express = require("express");
const isAuth = require("../middlewares/auth.middleware");

const {
  getAllUsers,
  register,
  login,
  checkSession,
  updateUserAddingAvatar,
} = require("../controllers/user.controller");
const { uploadAvatar } = require("../middlewares/avatar.middleware");

const UserRouter = express.Router();

UserRouter.get("/", [isAuth], getAllUsers);
UserRouter.post("/checksession", [isAuth], checkSession);
UserRouter.post("/register", uploadAvatar.single("avatar"), register);
UserRouter.post("/login", login);
UserRouter.patch("/:id", uploadAvatar.single("avatar"), updateUserAddingAvatar);

module.exports = UserRouter;
