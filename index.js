const express = require("express");
const { connectDB } = require("./src/utils/connect");
require("dotenv").config();
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const server = express();

connectDB();

server.use(cors());

const limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  max: 50,
  standardHeaders: false,
  legacyHeaders: false,
});

server.use(limiter);

server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

const BookRouter = require("./src/api/routes/book.routes");
server.use("/api/v1/books", BookRouter);

const AuthorRouter = require("./src/api/routes/author.routes");
server.use("/api/v1/authors", AuthorRouter);

server.use("*", (req, res, next) => {
  return res.status(404).json("Route not found 👾");
});

server.listen(3000, () => {
  console.log("Server working in http://localhost:3000 👽");
});
