const movieRouter = require('express').Router()
const authMiddleware = require('../middleware/auth.middleware')

const { readAllMovies, getMovie, createMovie, updateMovie, deleteMovie, nowShowing, upComing} = require('../controllers/movies.controller')

movieRouter.get('/', readAllMovies)
movieRouter.get('/upComing', upComing)
movieRouter.get('/nowShowing', nowShowing)
movieRouter.get('/:id', getMovie)
movieRouter.post('/',authMiddleware, createMovie)
movieRouter.patch('/:id',authMiddleware, updateMovie)
movieRouter.delete('/:id',authMiddleware, deleteMovie)

module.exports = movieRouter;
