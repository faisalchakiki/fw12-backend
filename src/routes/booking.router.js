const bookingRouter = require("express").Router();

const {
  readAllBooking,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
  historyBookingUser,
  ticketBooking,
} = require("../controllers/bookings.controller");

bookingRouter.get("/history", historyBookingUser);
bookingRouter.get("/ticket/:id", ticketBooking);
bookingRouter.get("/", readAllBooking);
bookingRouter.get("/:id", getBooking);
bookingRouter.post("/", createBooking);
bookingRouter.patch("/:id", updateBooking);
bookingRouter.delete("/:id", deleteBooking);

module.exports = bookingRouter;
