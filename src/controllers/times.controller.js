const errorHandler = require('../helpers/errorHandler.helper')
const {
  //mengimport data dari models
  getListTime,
  readingTime,
  creatingTime,
  updatingTime,
  deletingTime,
} = require("../models/time.model");

//menjalankan model
exports.readAllTime = (req, res) => {
  getListTime((err, datas) => {
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

exports.getTime = (req, res) => {
  readingTime(req.param('id'), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get Time",
      data: result.rows
    })
  })
}

exports.createTime = (req, res) => {
  creatingTime(req.body ,(err, result) => {
    if (err) {
    // console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create Time",
      results: result.rows[0],
    });
  });
};

exports.updateTime = (req, res) => {
  updatingTime(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update Time",
      results: result.rows[0]
    })
  });
};

exports.deleteTime = (req, res) => {
  deletingTime(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete Time Success",
      results : result.rows[0] 
    })
  });
};
