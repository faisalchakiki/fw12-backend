const subscriberRouter = require('express').Router()

const { readAllSubscriber, getSubscriber, createSubscriber, updateSubscriber, deleteSubscriber} = require('../controllers/subscribers.controller')

subscriberRouter.get('/', readAllSubscriber)
subscriberRouter.get('/:id', getSubscriber)
subscriberRouter.post('/', createSubscriber)
subscriberRouter.patch('/:id', updateSubscriber)
subscriberRouter.delete('/:id', deleteSubscriber)

module.exports = subscriberRouter;
