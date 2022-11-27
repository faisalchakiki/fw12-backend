const movieGenreRouter = require('express').Router()

const { readAllMovieGenre, getMovieGenre, createMovieGenre, updateMovieGenre, deleteMovieGenre} = require('../controllers/movieGenres.controller')

movieGenreRouter.get('/', readAllMovieGenre)
movieGenreRouter.get('/get?', getMovieGenre)
movieGenreRouter.post('/', createMovieGenre)
movieGenreRouter.patch('/?', updateMovieGenre)
movieGenreRouter.delete('/?', deleteMovieGenre)

module.exports = movieGenreRouter;
