const Book = require("../models/book.model");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    return res.status(200).json(books);
  } catch (error) {
    return next("Books were not found 👺", error);
  }
};

const createBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body);
    const createdBook = await newBook.save();
    return res.status(201).json(createdBook);
  } catch (error) {
    return next("Error while creating book 👺", error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    return res.status(200).json(book);
  } catch (error) {
    return next("Book not found 👺", error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedBook);
  } catch (error) {
    return next("Book not found 👺", error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    return res.status(200).json("Book deleted successfully");
  } catch (error) {
    return next("Book not found 👺", error);
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
