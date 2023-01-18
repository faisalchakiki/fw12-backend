const scheduleTimeRouter = require('express').Router()

const { readAllScheduleTime, getScheduleTime, createScheduleTime, updateScheduleTime, deleteScheduleTime} = require('../controllers/scheduleTimes.controller')

scheduleTimeRouter.get('/', readAllScheduleTime)
scheduleTimeRouter.get('/:id', getScheduleTime)
scheduleTimeRouter.post('/', createScheduleTime)
scheduleTimeRouter.patch('/:id', updateScheduleTime)
scheduleTimeRouter.delete('/:id', deleteScheduleTime)

module.exports = scheduleTimeRouter;
