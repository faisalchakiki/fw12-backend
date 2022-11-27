const statusBookingRouter = require('express').Router()

const { readAllStatusBooking, getStatusBooking, createStatusBooking, updateStatusBooking, deleteStatusBooking} = require('../controllers/statusBookings.controller')

statusBookingRouter.get('/', readAllStatusBooking)
statusBookingRouter.get('/get?', getStatusBooking)
statusBookingRouter.post('/', createStatusBooking)
statusBookingRouter.patch('/?', updateStatusBooking)
statusBookingRouter.delete('/?', deleteStatusBooking)

module.exports = statusBookingRouter;
