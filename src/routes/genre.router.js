const genreRouter = require('express').Router()

const { readAllGenre, getGenre, createGenre, updateGenre, deleteGenre} = require('../controllers/genres.controller')

genreRouter.get('/', readAllGenre)
genreRouter.get('/:id', getGenre)
genreRouter.post('/', createGenre)
genreRouter.patch('/:id', updateGenre)
genreRouter.delete('/:id', deleteGenre)

module.exports = genreRouter;
