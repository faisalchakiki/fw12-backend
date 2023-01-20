const jwt = require("jsonwebtoken");
const {
  creatingForgotAccount,
  authResetPassword,
  authForgotAccount,
} = require("../models/forgotAccount.model");
const {
  authEmailUser,
  creatingUser,
  updatingUserReset,
} = require("../models/user.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.login = (req, res) => {
  authEmailUser(req.body, (err, result) => {
    // console.log(req.body);
    if (result.rows.length) {
      const user = result.rows[0];
      if (user.password === req.body.password) {
        const token = jwt.sign({ id: user.id }, "key-backend");
        return res.status(200).json({
          success: true,
          message: "Success Login",
          results: {
            idUser: user.id,
            token,
          },
        });
      }
    }
    return res.status(400).json({
      success: false,
      message: "Wrong Email or Password",
    });
  });
};

exports.register = (req, res) => {
  // console.log(req.body);
  creatingUser(req.body, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        success: false,
        message: "Fail Register",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Register Success",
      results: result.rows[0],
    });
  });
};

exports.forgotAccount = (req, res) => {
  authEmailUser(req.body, (err, result) => {
    console.log(result);
    if (result.rows.length) {
      const [user] = result.rows;
      // console.log(user)
      const data = {
        email: user.email,
        idUser: user.id,
        code: Math.ceil(Math.random() * 90000),
      };
      creatingForgotAccount(data, (req, data) => {
        return res.status(200).json({
          success: true,
          message: "Reset Password has been requested",
        });
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "forgot account fail",
      });
    }
  });
};

exports.resetPassword = (req, res) => {
  const { password, confirmPassword, code } = req.body;
  authForgotAccount(code, (err, result) => {
    const user = result.rows[0];
    // console.log(user);
    if (password === confirmPassword) {
      updatingUserReset(password, user.email, (err, result) => {
        // console.log(result);
        if (err) {
          console.log(err);
          return errorHandler(err, res);
        }
        return res.status(200).json({
          success: true,
          message: "Success Change Password",
          results: result.rows[0],
        });
      });
    }
  });
};
