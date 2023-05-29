const express = require("express");
const {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/author.controller");

const AuthorRouter = express.Router();

AuthorRouter.get("/", getAllAuthors);
AuthorRouter.post("/", createAuthor);
AuthorRouter.get("/:id", getAuthorById);
AuthorRouter.put("/:id", updateAuthor);
AuthorRouter.delete("/:id", deleteAuthor);

module.exports = AuthorRouter;
