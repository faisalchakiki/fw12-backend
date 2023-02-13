const userRouter = require("express").Router();

const {
  listUsers,
  getUser,
  createUsers,
  deleteUsers,
  updateUsersAvatar,
} = require("../controllers/users.controller");

userRouter.get("/", listUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", createUsers);
userRouter.patch("/:id", updateUsersAvatar);
userRouter.delete("/:id", deleteUsers);

module.exports = userRouter;
