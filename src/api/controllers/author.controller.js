const Author = require("../models/author.model");

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find().populate("bibliography");
    return res.status(200).json(authors);
  } catch (error) {
    return next("Authors not found 🥵", error);
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const newAuthor = new Author(req.body);
    const createdAuthor = await newAuthor.save();
    return res.status(200).json(createdAuthor);
  } catch (error) {
    return next("Error while creating new author 😱", error);
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const author = await Author.findById(req.params.id);
    return res.status(200).json(author);
  } catch (error) {
    return next("Author not found 🤬", error);
  }
};

const updateAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedAuthor = await Author.findById(id, req.body, { new: true });

    return res.status(200).json(updatedAuthor);
  } catch (error) {
    return next("Author not found 😡", error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAuthor = await Author.findByIdAndDelete(id);
    return res.status(200).json("Author deleted successfully ⌫");
  } catch (error) {
    return next("Author not found 🥴", error);
  }
};

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
};
