const timeRouter = require('express').Router()

const { readAllTime, getTime, createTime, updateTime, deleteTime} = require('../controllers/times.controller')

timeRouter.get('/', readAllTime)
timeRouter.get('/get?', getTime)
timeRouter.post('/', createTime)
timeRouter.patch('/?', updateTime)
timeRouter.delete('/?', deleteTime)

module.exports = timeRouter;
