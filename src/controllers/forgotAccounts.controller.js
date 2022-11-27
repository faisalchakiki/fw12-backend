const errorHandler = require('../helpers/errorHandler.helper')
const {
  //mengimport data dari models
  getListForgotAccount,
  readingForgotAccount,
  creatingForgotAccount,
  updatingForgotAccount,
  deletingForgotAccount,
} = require("../models/forgotAccount.model");

//menjalankan model
exports.readAllForgotAccount = (req, res) => {
  getListForgotAccount((err, datas) => {
    if(err){
      // console./log(err)
      return errorHandler(err, res)
    }
    return res.status(200).json({
      success: true,
      message: "Success Fetch List",
      data: datas.rows,
    });
  });
};

exports.getForgotAccount = (req, res) => {
  readingForgotAccount(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get ForgotAccount",
      data: result.rows
    })
  })
}

exports.createForgotAccount = (req, res) => {
  creatingForgotAccount(req.body ,(err, result) => {
    if (err) {
    // console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create ForgotAccount",
      results: result.rows[0],
    });
  });
};

exports.updateForgotAccount = (req, res) => {
  updatingForgotAccount(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update ForgotAccount",
      results: result.rows[0]
    })
  });
};

exports.deleteForgotAccount = (req, res) => {
  deletingForgotAccount(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete ForgotAccount Success",
      results : result.rows[0] 
    })
  });
};
