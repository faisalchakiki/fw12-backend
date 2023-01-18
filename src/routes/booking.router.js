const bookingRouter = require('express').Router()

const { readAllBooking, getBooking, createBooking, updateBooking, deleteBooking} = require('../controllers/bookings.controller')

bookingRouter.get('/', readAllBooking)
bookingRouter.get('/:id', getBooking)
bookingRouter.post('/', createBooking)
bookingRouter.patch('/:id', updateBooking)
bookingRouter.delete('/:id', deleteBooking)

module.exports = bookingRouter;
