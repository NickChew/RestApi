const {Router} = require("express");
const {createMovie, listMovies, deleteMovie, updateActor} = require("./movieControllers");
const {login, userName} = require("../user/userControllers");
const {hashPass, comparePass, tokenCheck} = require("../middleware");

const movieRouter = Router();

movieRouter.post("/addMovie", createMovie);
movieRouter.get("/listMovies", listMovies);
movieRouter.put("/updateActor", updateActor);
movieRouter.delete("/deleteMovie", deleteMovie);

module.exports = movieRouter;