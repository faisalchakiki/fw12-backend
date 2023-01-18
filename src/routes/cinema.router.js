const cinemaRouter = require('express').Router()

const { readAllCinema, getCinema, createCinema, updateCinema, deleteCinema} = require('../controllers/cinemas.controller')

cinemaRouter.get('/', readAllCinema)
cinemaRouter.get('/:id', getCinema)
cinemaRouter.post('/', createCinema)
cinemaRouter.patch('/:id', updateCinema)
cinemaRouter.delete('/:id', deleteCinema)

module.exports = cinemaRouter;
