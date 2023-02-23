const profileRoute = require("express").Router();
const {
  userProfile,
  changePassword,
  updateProfile,
  updateProfileAvatar,
} = require("../controllers/profile.controller");

const {uploadMiddleware} = require('../middleware/upload.middleware')

profileRoute.get("/", userProfile);
profileRoute.patch("/", updateProfile);
profileRoute.patch("/password", changePassword);
profileRoute.patch("/upload", uploadMiddleware, updateProfileAvatar);

module.exports = profileRoute;
