const scheduleMovieRouter = require("express").Router();

const {
  readAllScheduleMovie,
  getScheduleMovie,
  createScheduleMovie,
  updateScheduleMovie,
  deleteScheduleMovie,
  getInfoSchedule,
  getCitySchedule,
  showAllPaymentMethod,
} = require("../controllers/scheduleMovies.controller");

scheduleMovieRouter.get("/", readAllScheduleMovie);
scheduleMovieRouter.get("/payment", showAllPaymentMethod);
scheduleMovieRouter.get("/:id", getScheduleMovie);
scheduleMovieRouter.get("/info/:id", getInfoSchedule);
scheduleMovieRouter.get("/city/:id", getCitySchedule);
scheduleMovieRouter.post("/", createScheduleMovie);
scheduleMovieRouter.patch("/:id", updateScheduleMovie);
scheduleMovieRouter.delete("/:id", deleteScheduleMovie);

module.exports = scheduleMovieRouter;
