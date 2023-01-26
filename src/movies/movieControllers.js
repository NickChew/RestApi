const Movie = require("./movieModels");
const jwt = require("jsonwebtoken");

exports.createMovie = async (request, response) => {
   console.log(request.body);
  try {
    const newMovie = await Movie.create({movieName: request.body.movieName});
    response.status(201).send({movie: newMovie});
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};

exports.listMovies = async (request,response) => {
  try {
    const movies = await Movie.find({});
    response.status(218).send({movie: movies});
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message});
  };
};

exports.deleteMovie = async (request,response) => {
  try {
    const delMovie = await Movie.deleteOne(
      {movieName: request.body.movieName}
    ); 
  response.status(200).send({message:"Deleted",delMovie})
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};

exports.updateActor = async (request, response) => {
  try {
      await Movie.updateOne({movieName: request.body.movieName}, {actor: request.body.actor}),
      response.send({msg: `Actor updated for ${request.body.movieName}`});
  } catch (error) {
      console.log(error);
      response.status(401).send({error: error.message});
  };
};

