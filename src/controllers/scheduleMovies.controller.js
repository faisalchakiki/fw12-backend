const errorHandler = require("../helpers/errorHandler.helper");
const {
  //mengimport data dari models
  getListScheduleMovie,
  readingScheduleMovie,
  creatingScheduleMovie,
  updatingScheduleMovie,
  deletingScheduleMovie,
  infoSchedule,
  citySchedule,
  getPaymentMethod,
} = require("../models/scheduleMovie.model");

//menjalankan model
exports.readAllScheduleMovie = (req, res) => {
  getListScheduleMovie((err, datas) => {
    if (err) {
      // console./log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Fetch List",
      data: datas.rows,
    });
  });
};

exports.getScheduleMovie = (req, res) => {
  readingScheduleMovie(req.param("id"), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Get Schedule Movie",
      data: result.rows,
    });
  });
};

exports.createScheduleMovie = (req, res) => {
  creatingScheduleMovie(req.body, (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Create ScheduleMovie",
      results: result.rows[0],
    });
  });
};

exports.updateScheduleMovie = (req, res) => {
  updatingScheduleMovie(req.body, req.param("id"), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Update ScheduleMovie",
      results: result.rows[0],
    });
  });
};

exports.deleteScheduleMovie = (req, res) => {
  deletingScheduleMovie(req.param("id"), (err, result) => {
    if (err) {
      // console.log(result)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete ScheduleMovie Success",
      results: result.rows[0],
    });
  });
};

exports.getInfoSchedule = (req, res) => {
  infoSchedule(req.param("id"), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Get Schedule Movie",
      data: result.rows,
    });
  });
};

exports.getCitySchedule = (req, res) => {
  citySchedule(req.param("id"), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Get City Schedule",
      data: result.rows,
    });
  });
};

exports.showAllPaymentMethod = (req, res) => {
  getPaymentMethod((err, datas) => {
    if (err) {
      console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Fetch List",
      data: datas.rows,
    });
  });
};