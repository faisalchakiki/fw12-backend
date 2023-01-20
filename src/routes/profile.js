const profileRoute = require("express").Router();
const { userProfile, changePassword, updateProfile, updateProfileAvatar } = require("../controllers/profile.controller");
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

profileRoute.get("/", userProfile);
profileRoute.patch("/", updateProfile);
profileRoute.patch("/password", changePassword);
profileRoute.patch("/upload", upload.single("picture"), updateProfileAvatar);

module.exports = profileRoute;
