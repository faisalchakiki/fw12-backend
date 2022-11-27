const cinemaRouter = require('express').Router()

const { readAllCinema, getCinema, createCinema, updateCinema, deleteCinema} = require('../controllers/cinemas.controller')

cinemaRouter.get('/', readAllCinema)
cinemaRouter.get('/get?', getCinema)
cinemaRouter.post('/', createCinema)
cinemaRouter.patch('/?', updateCinema)
cinemaRouter.delete('/?', deleteCinema)

module.exports = cinemaRouter;
