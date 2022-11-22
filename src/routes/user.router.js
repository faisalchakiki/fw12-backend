const userRouter = require('express').Router()

const { readUsers, getUser, createUsers, updateUsers, deleteUsers} = require('../controllers/users.controller')

userRouter.get('/readusers', readUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', createUsers)
userRouter.patch('/', updateUsers)
userRouter.delete('/', deleteUsers)