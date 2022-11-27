const subscriberRouter = require('express').Router()

const { readAllSubscriber, getSubscriber, createSubscriber, updateSubscriber, deleteSubscriber} = require('../controllers/subscribers.controller')

subscriberRouter.get('/', readAllSubscriber)
subscriberRouter.get('/get?', getSubscriber)
subscriberRouter.post('/', createSubscriber)
subscriberRouter.patch('/?', updateSubscriber)
subscriberRouter.delete('/?', deleteSubscriber)

module.exports = subscriberRouter;
