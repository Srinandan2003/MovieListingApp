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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 font-sans">
      {/* Search Section */}
      <div className="mb-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xl mx-auto"> {/* Enhanced shadow, border, rounded-2xl, hover effect */}
        <div className="flex flex-col sm:flex-row gap-4 items-center"> {/* Slightly more gap */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 placeholder-gray-400 transition duration-300 ease-in-out text-base" // Slightly larger text, better color
            />
          </div>

          <div className="flex gap-3 items-center">
            <label htmlFor="search-by-select" className="text-sm font-semibold text-gray-700 whitespace-nowrap">Search By:</label> {/* Clearer label */}
            <select
              id="search-by-select"
              value={searchBy}
              onChange={handleSearchByChange}
              className="px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 bg-white cursor-pointer transition duration-300 ease-in-out appearance-none text-base pr-8" // Larger text, more padding, better color
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25em' }}
            >
              <option value="title">Title</option>
              <option value="genre">Genre</option>
              <option value="year">Year</option>
              <option value="all">All Fields</option> {/* Changed back to "All Fields" for clarity */}
            </select>
          </div>

          {searchTerm && (
            <button
              onClick={clearSearch}
              className="px-5 py-2.5 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300 ease-in-out text-base shadow-sm hover:shadow-md" // Larger button, shadow, transition
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Movies Grid */}
      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 px-4"> {/* Slightly increased gap */}
          {filteredMovies.map(movie => (
            <MovieCard key={movie._id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-xl shadow-lg max-w-md mx-auto"> {/* Centered and slightly wider */}
          <div className="text-gray-500">
            {searchTerm ? (
              <div>
                <p className="text-xl font-semibold mb-3">No movies found</p>
                <p className="text-md">Please try adjusting your search term or criteria.</p> {/* More descriptive message */}
              </div>
            ) : (
              <p className="text-xl font-semibold">No movies available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;