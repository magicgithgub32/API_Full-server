const express = require("express");
const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");
const isAuth = require("../middlewares/auth.middleware");

const BookRouter = express.Router();

BookRouter.get("/", getAllBooks);
BookRouter.get("/:id", getBookById);

BookRouter.post("/", [isAuth], createBook);
BookRouter.patch("/:id", [isAuth], updateBook);
BookRouter.delete("/:id", [isAuth], deleteBook);

module.exports = BookRouter;
