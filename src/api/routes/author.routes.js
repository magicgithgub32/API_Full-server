const express = require("express");
const {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/author.controller");
const isAuth = require("../middlewares/auth.middleware");

const AuthorRouter = express.Router();

AuthorRouter.get("/", getAllAuthors);
AuthorRouter.get("/:id", getAuthorById);

AuthorRouter.post("/", [isAuth], createAuthor);
AuthorRouter.put("/:id", [isAuth], updateAuthor);
AuthorRouter.delete("/:id", [isAuth], deleteAuthor);

module.exports = AuthorRouter;
