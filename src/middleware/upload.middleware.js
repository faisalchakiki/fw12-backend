const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const path = require("path");
require("dotenv").config();

console.log(process.env.CLOUD_NAME);
console.log(process.env.API_KEY);
console.log(process.env.API_SECRET_CLOUD);

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
      console.log("tes at storage");
      const randomNumber = Math.round(Math.random() * 9000);
      const filename = `${randomNumber}${Date.now()}`;
      console.log(filename);
      return filename;
    },
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5000000 }, //5MB
  fileFilter: (req, file, cb) => {
    console.log("Filter");
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

const uploadMiddleware = async (req, res, next) => {
  console.log("uploadmiddleware");
  const uploadImage = await upload.single("picture");
  await uploadImage(req, res, (err) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
    next();
  });
};

module.exports = { uploadMiddleware, cloudinary };
