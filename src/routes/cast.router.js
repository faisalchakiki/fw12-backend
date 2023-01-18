const castRouter = require('express').Router()

const { readAllCast, getCast, createCast, updateCast, deleteCast} = require('../controllers/casts.controller')

castRouter.get('/', readAllCast)
castRouter.get('/:id', getCast)
castRouter.post('/', createCast)
castRouter.patch('/:id', updateCast)
castRouter.delete('/:id', deleteCast)

module.exports = castRouter;
