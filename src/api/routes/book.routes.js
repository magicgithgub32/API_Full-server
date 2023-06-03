const express = require("express");
const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller");
const isAuth = require("../middlewares/auth.middleware");
const { uploadCover } = require("../middlewares/covers.middleware");

const BookRouter = express.Router();

BookRouter.get("/", getAllBooks);
BookRouter.get("/:id", getBookById);

BookRouter.post("/", [isAuth], uploadCover.single("cover"), createBook);
BookRouter.patch("/:id", [isAuth], updateBook);
BookRouter.delete("/:id", [isAuth], uploadCover.single("cover"), deleteBook);

module.exports = BookRouter;
