const errorHandler = require("../helpers/errorHandler.helper");
const jwt = require("jsonwebtoken");
const filter = require("../helpers/filter.helper");
const {
  //mengimport data dari models
  getListBooking,
  readingBooking,
  creatingBooking,
  updatingBooking,
  deletingBooking,
  countAllBooking,
  historyBooking,
  ticket,
  seatsTicket,
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
  // console.log(seatNum);
  creatingBooking(req.body, (err, result) => {
    // console.log(result);
    if (err) {
      // console.log(err);
      return errorHandler(err, response);
    } else {
      creatingReservedSeat(seatNum, result.rows[0].id, (err, res) => {
        // console.log(res);
        if (err) {
          // console.log(err);
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
      // console.log(err);
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

exports.historyBookingUser = (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, "key-backend");
  const { id } = decoded;
  historyBooking(id, (err, result) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Success Get History",
      data: result.rows,
    });
  });
};

exports.ticketBooking = (req, res) => {
  ticket(req.param("id"), (err, result) => {
    if (err) {
      return errorHandler(err, res);
    }
    seatsTicket(req.param("id"), (errSeat, resSeat) => {
      if (errSeat) {
        return errorHandler(errSeat, res);
      }else{
        return res.status(200).json({
          success: true,
          message: "Success Update Booking",
          results: {
            transaction: result.rows[0],
            seat: resSeat.rows[0],
          },
        });
      }
    });
  });
};
