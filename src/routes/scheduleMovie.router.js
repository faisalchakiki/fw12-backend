const scheduleMovieRouter = require('express').Router()

const { readAllScheduleMovie, getScheduleMovie, createScheduleMovie, updateScheduleMovie, deleteScheduleMovie} = require('../controllers/scheduleMovies.controller')

scheduleMovieRouter.get('/', readAllScheduleMovie)
scheduleMovieRouter.get('/:id', getScheduleMovie)
scheduleMovieRouter.post('/', createScheduleMovie)
scheduleMovieRouter.patch('/:id', updateScheduleMovie)
scheduleMovieRouter.delete('/:id', deleteScheduleMovie)

module.exports = scheduleMovieRouter;
