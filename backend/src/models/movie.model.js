import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  releaseYear: Number,
  description: String,
  Image:String
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie