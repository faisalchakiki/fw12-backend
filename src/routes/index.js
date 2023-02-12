const routes = require("express").Router();

const userRoute = require("./user.router");
const movieRoute = require("./movie.router");
const genreRoute = require("./genre.router");
const castRoute = require("./cast.router");
const timeRoute = require("./time.router");
const bookingRoute = require("./booking.router");
const castMovieRoute = require("./castMovie.router");
const cinemaRoute = require("./cinema.router");
const forgotAccountRoute = require("./forgotAccount.router");
const movieGenreRoute = require("./movieGenre.router");
const reservedSeatRoute = require("./reservedSeat.router");
const scheduleMovieRoute = require("./scheduleMovie.router");
const scheduleTimeRoute = require("./scheduleTime.router");
const statusBookingRoute = require("./statusBooking.router");
const subscriberRoute = require("./subscriber.router");
const authRoute = require("./auth.router");
const profileRoute = require("./profile");

routes.use("/users", userRoute);
routes.use("/movies", movieRoute);
routes.use("/genres", genreRoute);
routes.use("/casts", castRoute);
routes.use("/times", timeRoute);
routes.use("/bookings", bookingRoute);
routes.use("/castMovies", castMovieRoute);
routes.use("/cinemas", cinemaRoute);
routes.use("/forgotAccounts", forgotAccountRoute);
routes.use("/movieGenres", movieGenreRoute);
routes.use("/reservedSeats", reservedSeatRoute);
routes.use("/scheduleMovies", scheduleMovieRoute);
routes.use("/scheduleTimes", scheduleTimeRoute);
routes.use("/statusBookings", statusBookingRoute);
routes.use("/subscribers", subscriberRoute);
routes.use("/auth", authRoute);
routes.use("/profile", profileRoute);

module.exports = routes;
