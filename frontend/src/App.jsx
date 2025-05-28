import MovieList from './pages/MovieList';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 text-gray-900 font-sans">
      {/* Header - Fixed at the top */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg border-b border-gray-700 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent drop-shadow-md">
            MovieApplication
          </h1>
          <span className="text-sm text-gray-300 italic font-medium">Your cinematic universe</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pt-20 pb-6 flex flex-col lg:flex-row gap-6">
        {/* Form Section - Fixed on large screens */}
        <aside className="lg:w-1/3 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-xl h-full overflow-auto ">
            <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Add New Movie
            </h2>
            <MovieForm />
          </div>
        </aside>

     
        <section className="lg:w-2/3">
          <div className="bg-gray-50 rounded-xl p-6 shadow-xl ">
            <h2 className="text-xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Your Movies</h2>
            <MovieList />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;