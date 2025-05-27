import MovieList from './pages/MovieList';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            🎬 Movie Collection
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Add and manage your favorite movies
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Add Movie Form (Smaller) */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    Add New Movie
                  </h2>
                  <p className="text-sm text-gray-600">Fill in the details below</p>
                </div>
                <MovieForm />
              </div>
            </div>
          </div>
          
          {/* Right Side - Movie List (Larger) */}
          <div className="lg:w-2/3">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Your Movie Collection
              </h2>
              <p className="text-gray-600">Browse and search through your movies</p>
            </div>
            <MovieList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;