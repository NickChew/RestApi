const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema ({
  movieName: {
    type: String,
    required: true,
    unique: true
  },
  
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
