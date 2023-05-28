const express = require("express");
const { connectDB } = require("./src/utils/connect");
require("dotenv").config();

const server = express();

connectDB();

server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: false }));

server.use("*", (req, res, next) => {
  return res.status(404).json("Route not found ☠️");
});

server.listen(3000, () => {
  console.log("Servidor funcionando en http://localhost:3000 👽");
});
