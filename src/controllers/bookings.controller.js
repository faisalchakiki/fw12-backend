const errorHandler = require('../helpers/errorHandler.helper')
const {
  //mengimport data dari models
  getListBooking,
  readingBooking,
  creatingBooking,
  updatingBooking,
  deletingBooking,
} = require("../models/booking.model");

//menjalankan model
exports.readAllBooking = (req, res) => {
  getListBooking((err, datas) => {
    if(err){
      // console.log(err)
      return errorHandler(err, res)
    }
    return res.status(200).json({
      success: true,
      message: "Success Fetch List",
      data: datas.rows,
    });
  });
};

exports.getBooking = (req, res) => {
  readingBooking(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get Booking",
      data: result.rows
    })
  })
}

exports.createBooking = (req, res) => {
  creatingBooking(req.body ,(err, result) => {
    if (err) {
    console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create Booking",
      results: result.rows[0],
    });
  });
};

exports.updateBooking = (req, res) => {
  updatingBooking(req.body, req.param('id'), (err, result) => {
    if(err){
      console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update Booking",
      results: result.rows[0]
    })
  });
};

exports.deleteBooking = (req, res) => {
  deletingBooking(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete Booking Success",
      results : result.rows[0] 
    })
  });
};
