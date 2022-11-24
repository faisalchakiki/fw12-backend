const movieRouter = require('express').Router()

const { readAllMovies, getMovie, createMovie, updateMovie, deleteMovie} = require('../controllers/movies.controller')

movieRouter.get('/', readAllMovies)
movieRouter.get('/get?', getMovie)
movieRouter.post('/', createMovie)
movieRouter.patch('/?', updateMovie)
movieRouter.delete('/?', deleteMovie)

module.exports = movieRouter;
