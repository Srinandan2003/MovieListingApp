import express from 'express';
import getMovie from '../middlewares/getMovie.middleware.js';
import Movie from '../models/movie.model.js';

const router = express.Router();

// Get all movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new movie
router.post('/', async (req, res) => {
  const { title, genre, releaseYear, description, Image } = req.body;

  if (!title || !genre || !releaseYear || !description || !Image) {
    return res.status(400).json({ message: 'All fields including Image are required' });
  }

  try {
    const movie = new Movie({ title, genre, releaseYear, description, Image });
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a movie
router.patch('/:id', getMovie, async (req, res) => {
  const { title, genre, releaseYear, description, Image } = req.body;

  if (title !== undefined) res.movie.title = title;
  if (genre !== undefined) res.movie.genre = genre;
  if (releaseYear !== undefined) res.movie.releaseYear = releaseYear;
  if (description !== undefined) res.movie.description = description;
  if (Image !== undefined) res.movie.Image = Image;

  try {
    const updatedMovie = await res.movie.save();
    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a movie
router.delete('/:id', getMovie, async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Movie not found or already deleted" });
    res.status(200).json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
