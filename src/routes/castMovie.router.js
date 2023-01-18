const castMovieRouter = require('express').Router()

const { readAllCastMovie, getCastMovie, createCastMovie, updateCastMovie, deleteCastMovie} = require('../controllers/castMovies.controller')

castMovieRouter.get('/', readAllCastMovie)
castMovieRouter.get('/:id', getCastMovie)
castMovieRouter.post('/', createCastMovie)
castMovieRouter.patch('/:id', updateCastMovie)
castMovieRouter.delete('/:id', deleteCastMovie)

module.exports = castMovieRouter;
