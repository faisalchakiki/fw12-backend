const statusBookingRouter = require('express').Router()

const { readAllStatusBooking, getStatusBooking, createStatusBooking, updateStatusBooking, deleteStatusBooking} = require('../controllers/statusBookings.controller')

statusBookingRouter.get('/', readAllStatusBooking)
statusBookingRouter.get('/:id', getStatusBooking)
statusBookingRouter.post('/', createStatusBooking)
statusBookingRouter.patch('/:id', updateStatusBooking)
statusBookingRouter.delete('/:id', deleteStatusBooking)

module.exports = statusBookingRouter;
