const routes = require('express').Router()

const userRoute = require('./user.router')
const movieRoute = require('./movie.router')
const genreRoute = require('./genre.router')
const castRoute = require('./cast.router')

routes.use('/users', userRoute)
routes.use('/movies', movieRoute)
routes.use('/genres', genreRoute)
routes.use('/casts', castRoute)

module.exports = routes