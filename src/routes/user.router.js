const userRouter = require('express').Router()

const { listUsers, getUser, createUsers, updateUsers, deleteUsers} = require('../controllers/users.controller')

userRouter.get('/', listUsers)
userRouter.get('/get?', getUser)
userRouter.post('/', createUsers)
userRouter.patch('/?', updateUsers)
userRouter.delete('/?', deleteUsers)

module.exports = userRouter;
