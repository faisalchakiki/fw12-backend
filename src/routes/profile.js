const profileRoute = require("express").Router();
const {
  userProfile,
  changePassword,
  updateProfile,
  updateProfileAvatar,
} = require("../controllers/profile.controller");

const middleUpload = require("../middleware/upload.middleware");

profileRoute.get("/", userProfile);
profileRoute.patch("/", updateProfile);
profileRoute.patch("/password", changePassword);
profileRoute.patch("/upload", middleUpload, updateProfileAvatar);

module.exports = profileRoute;
