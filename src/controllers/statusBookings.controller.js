const errorHandler = require('../helpers/errorHandler.helper')
const {
  //mengimport data dari models
  getListStatusBooking,
  readingStatusBooking,
  creatingStatusBooking,
  updatingStatusBooking,
  deletingStatusBooking,
} = require("../models/StatusBooking.model");

//menjalankan model
exports.readAllStatusBooking = (req, res) => {
  getListStatusBooking((err, datas) => {
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

exports.getStatusBooking = (req, res) => {
  readingStatusBooking(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get StatusBooking",
      data: result.rows
    })
  })
}

exports.createStatusBooking = (req, res) => {
  creatingStatusBooking(req.body ,(err, result) => {
    if (err) {
    // console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create StatusBooking",
      results: result.rows[0],
    });
  });
};

exports.updateStatusBooking = (req, res) => {
  updatingStatusBooking(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update StatusBooking",
      results: result.rows[0]
    })
  });
};

exports.deleteStatusBooking = (req, res) => {
  deletingStatusBooking(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete StatusBooking Success",
      results : result.rows[0] 
    })
  });
};
