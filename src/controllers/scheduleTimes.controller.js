const errorHandler = require('../helpers/errorHandler.helper')
const {
  //mengimport data dari models
  getListScheduleTime,
  readingScheduleTime,
  creatingScheduleTime,
  updatingScheduleTime,
  deletingScheduleTime,
} = require("../models/scheduleTime.model");

//menjalankan model
exports.readAllScheduleTime = (req, res) => {
  getListScheduleTime((err, datas) => {
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

exports.getScheduleTime = (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, "key-backend");
  const { id } = decoded;
  readingScheduleTime(id, (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res)
      }
    return res.status(200).json({
      success: true,
      message: "Success Get ScheduleTime",
      data: result.rows
    })
  })
}

exports.createScheduleTime = (req, res) => {
  creatingScheduleTime(req.body ,(err, result) => {
    if (err) {
    // console.log(err)
    return errorHandler(err, res) 
    }
    return res.status(200).json({
      success: true,
      message: "Success Create ScheduleTime",
      results: result.rows[0],
    });
  });
};

exports.updateScheduleTime = (req, res) => {
  updatingScheduleTime(req.body, req.param('id'), (err, result) => {
    if(err){
      // console.log(err)
      return errorHandler(err ,res)
    }
    return res.status(200).json({
      success : true,
      message : "Success Update ScheduleTime",
      results: result.rows[0]
    })
  });
};

exports.deleteScheduleTime = (req, res) => {
  deletingScheduleTime(req.param("id"), (err, result)=>{
    if(err){
      // console.log(result)
      return errorHandler(err , res)
    }
    return res.status(200).json({
      success : true,
      message : "Delete ScheduleTime Success",
      results : result.rows[0] 
    })
  });
};
