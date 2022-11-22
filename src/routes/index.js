const routes = require('express').Router()
console.log(routes);
routes.use('/users',()=>{require('./user.router')})
routes.use('/movies',()=>{require('./movie.router')})

module.exports = routes