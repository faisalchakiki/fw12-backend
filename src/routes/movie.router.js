const movieRouter = require('express').Router()

const { readMovies, getMovie, createMovie, updateMovie, deleteMovie} = require('../controllers/movies.controller')

movieRouter.get('/', readMovies)
movieRouter.get('/:id', getMovie)
movieRouter.post('/', createMovie)
movieRouter.patch('/', updateMovie)
movieRouter.delete('/', deleteMovie)