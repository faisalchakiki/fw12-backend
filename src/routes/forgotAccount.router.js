const forgotAccountRouter = require('express').Router()

const { readAllForgotAccount, getForgotAccount, createForgotAccount, updateForgotAccount, deleteForgotAccount} = require('../controllers/forgotAccounts.controller')

forgotAccountRouter.get('/', readAllForgotAccount)
forgotAccountRouter.get('/get?', getForgotAccount)
forgotAccountRouter.post('/', createForgotAccount)
forgotAccountRouter.patch('/?', updateForgotAccount)
forgotAccountRouter.delete('/?', deleteForgotAccount)

module.exports = forgotAccountRouter;
