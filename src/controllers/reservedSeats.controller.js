const errorHandler = require('../helpers/errorHandler.helper')
const {
  //mengimport data dari models
  getListReservedSeat,
  readingReservedSeat,
  creatingReservedSeat,
  updatingReservedSeat,
  deletingReservedSeat,
} = require("../models/reservedSeat.model");

//menjalankan model
exports.readAllReservedSeat = (req, res) => {
  getListReservedSeat((err, datas) => {
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

exports.getReservedSeat = (req, res) => {
  readingReservedSeat(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get ReservedSeat",
      data: result.rows
    })
  })
}

exports.createReservedSeat = (req, res) => {
  creatingReservedSeat(req.body ,(err, result) => {
    if (err) {
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create ReservedSeat",
      results: result.rows[0],
    });
  });
};

exports.updateReservedSeat = (req, res) => {
  updatingReservedSeat(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update ReservedSeat",
      results: result.rows[0]
    })
  });
};

exports.deleteReservedSeat = (req, res) => {
  deletingReservedSeat(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete ReservedSeat Success",
      results : result.rows[0] 
    })
  });
};
