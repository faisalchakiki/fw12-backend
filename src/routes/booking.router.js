const bookingRouter = require('express').Router()

const { readAllBooking, getBooking, createBooking, updateBooking, deleteBooking} = require('../controllers/bookings.controller')

bookingRouter.get('/', readAllBooking)
bookingRouter.get('/get?', getBooking)
bookingRouter.post('/', createBooking)
bookingRouter.patch('/?', updateBooking)
bookingRouter.delete('/?', deleteBooking)

module.exports = bookingRouter;
