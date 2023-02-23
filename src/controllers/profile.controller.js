const argon = require("argon2");
const jwt = require("jsonwebtoken");
const errorHandler = require("../helpers/errorHandler.helper");
const { readingUser, updatingUser } = require("../models/user.model");

exports.userProfile = (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, "key-backend");
  const { id } = decoded;
  readingUser(id, (err, result) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Get User",
      data: result.rows,
    });
  });
};

exports.changePassword = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, "key-backend");
  const { id } = decoded;
  req.body.password = await argon.hash(req.body.password);
  updatingUser(req.body, id, (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Change Password",
      results: result.rows[0],
    });
  });
};

exports.updateProfile = (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, "key-backend");
  const { id } = decoded;
  console.log(id);
  updatingUser(req.body, id, (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Change Profile",
      results: result.rows[0],
    });
  });
};

exports.updateProfileAvatar = (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, "key-backend");
  const { id } = decoded;
  if (req.file) {
    console.log("req.file");
    req.body.picture = req.file.path;
    updatingUser(req.body, id, (err, result) => {
      if (err) {
        console.log(err);
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "Success Upload Avatar",
        results: result.rows[0],
      });
    });
  }
};
