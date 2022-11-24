const castRouter = require('express').Router()

const { readAllCast, getCast, createCast, updateCast, deleteCast} = require('../controllers/casts.controller')

castRouter.get('/', readAllCast)
castRouter.get('/get?', getCast)
castRouter.post('/', createCast)
castRouter.patch('/?', updateCast)
castRouter.delete('/?', deleteCast)

module.exports = castRouter;
