const jwt = require("jsonwebtoken");
const { authEmailUser, creatingUser } = require("../models/user.model");

exports.login = (req, res) => {
  authEmailUser(req.body, (err, result) => {
    console.log(req.body)
    if (result.rows.length) {
      const user = result.rows[0];
      if (user.password === req.body.password) {
        const token = jwt.sign({ id: user.id },"key-backend");
        return res.status(200).json({
          success: true,
          message: "Success Login",
          results: {
            token
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
  console.log(req.body);
  creatingUser(req.body, (err, result) => {
    if (err) {
      console.log(err)
      return res.status(400).json({
        success: false,
        message: "Fail Register",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Register Succes",
      results: result.rows[0],
    });
  });
};
