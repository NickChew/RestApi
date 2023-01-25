const {Router} = require("express");
const {createMovie, listMovies, updatedMovie, deleteMovie} = require("./movieControllers");
const {login, userName} = require("../user/userControllers");
const {hashPass, comparePass, tokenCheck} = require("../middleware");

const movieRouter = Router();

movieRouter.post("/addMovie", createMovie);
movieRouter.get("/listMovies", listMovies);
// movieRouter.post("/login", comparePass, login); 
movieRouter.put("/updateMovie", updatedMovie);
movieRouter.delete("/deleteMovie", deleteMovie);

module.exports = movieRouter;