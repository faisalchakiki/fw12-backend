const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");
const {
  //mengimport data dari models
  getListBooking,
  readingBooking,
  creatingBooking,
  updatingBooking,
  deletingBooking,
  countAllBooking,
} = require("../models/booking.model");
const { creatingReservedSeat } = require("../models/reservedSeat.model");
const createTransaction = require("../models/transaction.model");

//menjalankan model
exports.readAllBooking = (req, res) => {
  const sortable = ["fullName", "createdAll", "updatedAt"];
  filter(req.query, sortable, countAllBooking, res, (filter, pageInfo) => {
    getListBooking(filter, (err, datas) => {
      if (err) {
        // console.log(err)
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

exports.getBooking = (req, res) => {
  readingBooking(req.param("id"), (err, result) => {
    if (err) {
      // console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Get Booking",
      data: result.rows,
    });
  });
};

exports.createBooking = (req, response) => {
  const { seatNum } = req.body;
  creatingBooking(req.body, (err, result) => {
    // console.log(result);
    if (err) {
      console.log(err);
      return errorHandler(err, response);
    } else {
      creatingReservedSeat(seatNum, result.rows[0].id, (err, res) => {
        // console.log(res);
        if (err) {
          console.log(err);
          return errorHandler(err, response);
        } else {
          return response.status(200).json({
            success: true,
            message: "Success Update Booking",
            results: {
              transaction: result.rows[0],
              seat: res.rows[0],
            },
          });
        }
      });
    }
  });
};

exports.updateBooking = (req, res) => {
  updatingBooking(req.body, req.param("id"), (err, result) => {
    if (err) {
      console.log(err);
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Update Booking",
      results: result.rows[0],
    });
  });
};

exports.deleteBooking = (req, res) => {
  deletingBooking(req.param("id"), (err, result) => {
    if (err) {
      // console.log(result)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete Booking Success",
      results: result.rows[0],
    });
  });
};
