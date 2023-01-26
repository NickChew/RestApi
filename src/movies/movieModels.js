const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema ({

  movieName: {
    type: String,
    required: true,
    unique: true
  },

  actor: {
    type: String,
    unique: false,
    required: false,
    default: "Unknown actor"
  }
  
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
