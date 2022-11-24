const genreRouter = require('express').Router()

const { readAllGenre, getGenre, createGenre, updateGenre, deleteGenre} = require('../controllers/genres.controller')

genreRouter.get('/', readAllGenre)
genreRouter.get('/get?', getGenre)
genreRouter.post('/', createGenre)
genreRouter.patch('/?', updateGenre)
genreRouter.delete('/?', deleteGenre)

module.exports = genreRouter;
