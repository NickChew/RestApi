const Movie = require("./movieModels");
const jwt = require("jsonwebtoken");

exports.login = async (request,response) => {
  try {
    const token = jwt.sign({_id: request.user._id},process.env.SECRET_KEY);
    response.send({user: request.user.username, token});
  } catch (error) {
    console.log(error);
    response.status(401).send({error: error.message})
  };
};

exports.createMovie = async (request, response) => {
  try {
    const newMovie = await Movie.create(request.body);
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

exports.updatedMovie = async (request,response) => {
  try {
    //code with update/replace user email goes here
    const updMovie = await Movie.updateOne(
      {moviename: request.body.moviename}
    );
  response.status(200).send({message:"Success",updMovie})
  } catch (error) {
    console.log(error);
    response.status(500).send({error: error.message})
  };
};