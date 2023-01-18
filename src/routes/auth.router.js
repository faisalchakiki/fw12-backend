const authRouter = require("express").Router();

const { login, register, forgotAccount, resetPassword } = require("../controllers/auth.controller");

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.post("/forgotAccount", forgotAccount);
authRouter.post("/resetPassword", resetPassword);

module.exports = authRouter;
