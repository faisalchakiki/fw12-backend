const userRouter = require('express').Router()
const multer = require('multer')

const upload = multer({ dest : "uploads/" })

const { listUsers, getUser, createUsers, deleteUsers, updateUsersAvatar} = require('../controllers/users.controller')

userRouter.get('/', listUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', createUsers)
userRouter.patch('/:id', upload.single("picture"), updateUsersAvatar)
userRouter.delete('/:id', deleteUsers)

module.exports = userRouter;
