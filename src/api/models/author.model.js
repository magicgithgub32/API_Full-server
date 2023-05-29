const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    DOB: { type: String, required: false, trim: true },
    nationality: { type: String, required: false, trim: true },
    bibliography: [
      {
        type: mongoose.Types.ObjectId,
        required: true,
        trim: true,
        ref: "Book",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
