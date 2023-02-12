const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");
const {
  //mengimport data dari models
  getListUsers,
  readingUser,
  creatingUser,
  updatingUser,
  deletingUser,
  countAllUsers,
} = require("../models/user.model");

//menjalankan model
exports.listUsers = (req, res) => {
  const sortable = ["firstName", "createdAll", "updatedAt"];
  filter(req.query, sortable, countAllUsers, res, (filter, pageInfo) => {
    getListUsers(filter, (err, datas) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "Success Fetch List",
        pageInfo,
        data: datas.rows,
      });
    });
  });
};

exports.getUser = (req, res) => {
  readingUser(req.param("id"), (err, result) => {
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

exports.createUsers = (req, res) => {
  creatingUser(req.body, (err, result) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Create User",
      results: result.rows[0],
    });
  });
};

exports.updateUsersAvatar = (req, res) => {
  if (req.file) {
    req.body.picture = req.file.filename;
  }
  console.log(req.body);
  updatingUser(req.body, req.param("id"), (err, result) => {
    if (err) {
      console.log(err);
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Update User",
      results: result.rows[0],
    });
  });
};

exports.deleteUsers = (req, res) => {
  deletingUser(req.param("id"), (err, result) => {
    console.log(result);
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete User Success",
      results: result.rows[0],
    });
  });
};

exports.updateUser = (req, res) => {
  updatingUser(req.body, req.param("id"), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Update User",
      results: result.rows[0],
    });
  });
};
