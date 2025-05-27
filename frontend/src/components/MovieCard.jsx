const MovieCard = ({ movie }) => (
  <div className="shadow-lg p-4 rounded-lg bg-white">
    <img src={movie.Image} alt={movie.title} className="h-48 w-full object-cover rounded" />
    <h2 className="text-xl font-bold mt-2">{movie.title}</h2>
    <p><strong>Genre:</strong> {movie.genre}</p>
    <p><strong>Year:</strong> {movie.releaseYear}</p>
    <p className="text-sm text-gray-600 mt-2">{movie.description}</p>
  </div>
);

export default MovieCard;
