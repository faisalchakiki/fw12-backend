const argon = require("argon2");
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

const { transport } = require("../helpers/mail.helper");

exports.login = (req, res) => {
  authEmailUser(req.body, async (err, result) => {
    // console.log(req.body);
    if (result.rows.length) {
      const user = result.rows[0];
      if (await argon.verify(user.password, req.body.password)) {
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

exports.register = async (req, res) => {
  req.body.password = await argon.hash(req.body.password);
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
  try {
    authEmailUser(req.body, async (err, result) => {
      if (result.rows.length) {
        const [user] = result.rows;
        // console.log(user)
        const code = Math.ceil(Math.random() * 90000);
        const data = {
          email: user.email,
          idUser: user.id,
          code,
        };
        const mailOptions = {
          from: "faisalchakiki99@gmail.com", // sender
          to: user.email, // receiver
          subject: "Authentication Code Reset Password Cinephile", // Subject
          html: `<p>Here is your reset password code <b>${code}</b></p>`, // html body
        };
        const sendMail = async () => {
          try {
            const mailer = await transport();
            await mailer.sendMail(mailOptions);
            console.log("Email terkirim!");
          } catch (err) {
            console.log(err);
            console.log("Gagal!");
          }
        };
        sendMail()
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
  } catch (err) {
    console.log(err);
  }
};

exports.resetPassword = (req, res) => {
  let { password, confirmPassword, code } = req.body;
  try {
    authForgotAccount(code, async (err, result) => {
      const user = result.rows[0];
      // console.log(user);
      if (password === confirmPassword) {
        try {
          password = await argon.hash(password);
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
        } catch (err) {
          return res.status(400).json({
            success: false,
            message: "Code is false",
          });
        }
      }
    });
  } catch (err) {
    console.log("Code not match");
  }
};
