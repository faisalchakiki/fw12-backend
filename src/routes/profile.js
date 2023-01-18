const profileRoute = require("express").Router();
const { userProfile, changePassword } = require("../controllers/profile.controller");
const multer = require("multer");
const { updateUsersAvatar, updateUser } = require("../controllers/users.controller");

const upload = multer({ dest: "uploads/" });

profileRoute.get("/", userProfile);
profileRoute.patch("/", updateUser);
profileRoute.patch("/password", changePassword);
profileRoute.patch("/upload", upload.single("picture"), updateUsersAvatar);

module.exports = profileRoute;
