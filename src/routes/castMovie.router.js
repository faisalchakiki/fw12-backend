const castMovieRouter = require('express').Router()

const { readAllCastMovie, getCastMovie, createCastMovie, updateCastMovie, deleteCastMovie} = require('../controllers/castMovies.controller')

castMovieRouter.get('/', readAllCastMovie)
castMovieRouter.get('/get?', getCastMovie)
castMovieRouter.post('/', createCastMovie)
castMovieRouter.patch('/?', updateCastMovie)
castMovieRouter.delete('/?', deleteCastMovie)

module.exports = castMovieRouter;
