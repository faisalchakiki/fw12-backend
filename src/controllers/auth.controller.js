const jwt = require("jsonwebtoken");
const {
  creatingForgotAccount,
  authResetPassword,
} = require("../models/forgotAccount.model");
const {
  authEmailUser,
  creatingUser,
  updatingUser,
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
            idUser : user.id,
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
  // console.log(req.body.email);
  const { password, confirmPassword } = req.body;
  if ( password === confirmPassword) {
    authResetPassword(req.body, (err, result) => {
      if (err) {
        console.log(err);
        return errorHandler(err, res);
      }
      if (result.rows.length) {
        const [user] = result.rows;
        updatingUser({password}, user.idUser, (err, result) => {
          if (err) {
            console.log(err);
            return errorHandler(err, res);
          }
          if (result.rows.length) {
            return res.status(200).json({
              success: true,
              message: "Password updated, please relogin",
            });
          }
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Reset request not found",
        });
      }
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "Password and confirm password not match",
    });
  }
};
