const forgotAccountRouter = require('express').Router()

const { readAllForgotAccount, getForgotAccount, createForgotAccount, updateForgotAccount, deleteForgotAccount} = require('../controllers/forgotAccounts.controller')

forgotAccountRouter.get('/', readAllForgotAccount)
forgotAccountRouter.get('/:id', getForgotAccount)
forgotAccountRouter.post('/', createForgotAccount)
forgotAccountRouter.patch('/:id', updateForgotAccount)
forgotAccountRouter.delete('/:id', deleteForgotAccount)

module.exports = forgotAccountRouter;
