const scheduleMovieRouter = require('express').Router()

const { readAllScheduleMovie, getScheduleMovie, createScheduleMovie, updateScheduleMovie, deleteScheduleMovie} = require('../controllers/scheduleMovies.controller')

scheduleMovieRouter.get('/', readAllScheduleMovie)
scheduleMovieRouter.get('/get?', getScheduleMovie)
scheduleMovieRouter.post('/', createScheduleMovie)
scheduleMovieRouter.patch('/?', updateScheduleMovie)
scheduleMovieRouter.delete('/?', deleteScheduleMovie)

module.exports = scheduleMovieRouter;
