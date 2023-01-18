const movieGenreRouter = require('express').Router()

const { readAllMovieGenre, getMovieGenre, createMovieGenre, updateMovieGenre, deleteMovieGenre} = require('../controllers/movieGenres.controller')

movieGenreRouter.get('/', readAllMovieGenre)
movieGenreRouter.get('/:id', getMovieGenre)
movieGenreRouter.post('/', createMovieGenre)
movieGenreRouter.patch('/:id', updateMovieGenre)
movieGenreRouter.delete('/:id', deleteMovieGenre)

module.exports = movieGenreRouter;
