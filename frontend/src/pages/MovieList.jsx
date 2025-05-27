import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBy, setSearchBy] = useState('title'); // title, genre, year

  useEffect(() => {
    axios.get("https://movielistingapp-cqg8.onrender.com/movies/")
      .then(res => {
        setMovies(res.data);
        setFilteredMovies(res.data);
      })
      .catch(err => console.error('Error fetching movies:', err));
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredMovies(movies);
      return;
    }

    const filtered = movies.filter(movie => {
      const searchValue = searchTerm.toLowerCase();
      
      switch (searchBy) {
        case 'title':
          return movie.title.toLowerCase().includes(searchValue);
        case 'genre':
          return movie.genre.toLowerCase().includes(searchValue);
        case 'year':
          return movie.releaseYear.toString().includes(searchValue);
        case 'all':
          return (
            movie.title.toLowerCase().includes(searchValue) ||
            movie.genre.toLowerCase().includes(searchValue) ||
            movie.releaseYear.toString().includes(searchValue) ||
            movie.description.toLowerCase().includes(searchValue)
          );
        default:
          return movie.title.toLowerCase().includes(searchValue);
      }
    });

    setFilteredMovies(filtered);
  }, [searchTerm, searchBy, movies]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchBy('title');
  };

  return (
    <div className="p-6">
      {/* Search Section */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex gap-2 items-center">
            <label className="text-sm font-medium text-gray-700">Search by:</label>
            <select
              value={searchBy}
              onChange={handleSearchByChange}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="title">Title</option>
              <option value="genre">Genre</option>
              <option value="year">Year</option>
              <option value="all">All Fields</option>
            </select>
          </div>
          
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
            >
              Clear
            </button>
          )}
        </div>
        
        {/* Search Results Info */}
        <div className="mt-3 text-sm text-gray-600">
          {searchTerm ? (
            <p>
              Showing {filteredMovies.length} of {movies.length} movies
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          ) : (
            <p>Showing all {movies.length} movies</p>
          )}
        </div>
      </div>

      {/* Movies Grid */}
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-500">
            {searchTerm ? (
              <div>
                <p className="text-lg mb-2">No movies found</p>
                <p>Try adjusting your search term or search criteria</p>
              </div>
            ) : (
              <p>No movies available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;