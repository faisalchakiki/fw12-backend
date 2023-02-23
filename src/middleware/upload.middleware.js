const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET_CLOUD,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "cinephile-image",
    format: async (req, file) => path.extname(file.originalname).slice("1"), // supports promises as well
    public_id: (req, file) => {
      // console.log("tes at middleware");
      const randomNumber = Math.round(Math.random() * 9000);
      const filename = `${randomNumber}${Date.now()}`;
      return filename;
    },
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limits = {
  // 3MB
  fileSize: 1024 * 1024 * 3,
};

const uploadImage = multer({
  storage,
  limits,
  fileFilter,
}).single("picture");

module.exports = (req, res, next) => {
  uploadImage(req, res, (err) => {
    if (err) {
      return errorHandling(err, res);
    }
    next();
  });
};
