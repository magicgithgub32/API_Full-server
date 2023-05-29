const express = require("express");
const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");

const BookRouter = express.Router();

BookRouter.get("/", getAllBooks);
BookRouter.post("/", createBook);
BookRouter.get("/:id", getBookById);
BookRouter.patch("/:id", updateBook);
BookRouter.delete("/:id", deleteBook);

module.exports = BookRouter;
