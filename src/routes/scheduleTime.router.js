const scheduleTimeRouter = require('express').Router()

const { readAllScheduleTime, getScheduleTime, createScheduleTime, updateScheduleTime, deleteScheduleTime} = require('../controllers/scheduleTimes.controller')

scheduleTimeRouter.get('/', readAllScheduleTime)
scheduleTimeRouter.get('/get?', getScheduleTime)
scheduleTimeRouter.post('/', createScheduleTime)
scheduleTimeRouter.patch('/?', updateScheduleTime)
scheduleTimeRouter.delete('/?', deleteScheduleTime)

module.exports = scheduleTimeRouter;
