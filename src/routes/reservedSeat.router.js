const reservedSeatRouter = require('express').Router()

const { readAllReservedSeat, getReservedSeat, createReservedSeat, updateReservedSeat, deleteReservedSeat} = require('../controllers/reservedSeats.controller')

reservedSeatRouter.get('/', readAllReservedSeat)
reservedSeatRouter.get('/get?', getReservedSeat)
reservedSeatRouter.post('/', createReservedSeat)
reservedSeatRouter.patch('/?', updateReservedSeat)
reservedSeatRouter.delete('/?', deleteReservedSeat)

module.exports = reservedSeatRouter;
