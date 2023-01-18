const timeRouter = require('express').Router()

const { readAllTime, getTime, createTime, updateTime, deleteTime} = require('../controllers/times.controller')

timeRouter.get('/', readAllTime)
timeRouter.get('/id:', getTime)
timeRouter.post('/', createTime)
timeRouter.patch('/:id', updateTime)
timeRouter.delete('/:id', deleteTime)

module.exports = timeRouter;
