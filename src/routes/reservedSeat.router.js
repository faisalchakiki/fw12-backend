const reservedSeatRouter = require('express').Router()

const { readAllReservedSeat, getReservedSeat, createReservedSeat, updateReservedSeat, deleteReservedSeat} = require('../controllers/reservedSeats.controller')

reservedSeatRouter.get('/', readAllReservedSeat)
reservedSeatRouter.get('/:id', getReservedSeat)
reservedSeatRouter.post('/', createReservedSeat)
reservedSeatRouter.patch('/:id', updateReservedSeat)
reservedSeatRouter.delete('/:id', deleteReservedSeat)

module.exports = reservedSeatRouter;
