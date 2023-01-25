const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema ({
  // userName: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  movieName: {
    type: String,
    required: true,
    unique: true
  },
  
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
