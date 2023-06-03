const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv").config();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,

  params: {
    folder: "booksdb",
    allowFormats: ["jpg", "png", "jpeg", "webp", "gif"],
  },
});

const uploadCover = multer({ storage });

const eraseBookCoverCloudinary = (imageURL) => {
  const imageSplitted = imageURL.split("/");
  const nameSplitted = imageSplitted[imageSplitted.length - 1].split(".");
  const folderSplitted = imageSplitted[imageSplitted.length - 2];
  const public_id = `${folderSplitted}/${nameSplitted[0]}`;

  cloudinary.uploader.destroy(public_id, () => {
    console.log("Book cover erased! 🔥");
  });
};

const configCloudinaryForBookCovers = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
  });
  console.log("Your Cloudinary storage for book covers is ready to be used 😎");
};

module.exports = {
  uploadCover,
  configCloudinaryForBookCovers,
  eraseBookCoverCloudinary,
};
