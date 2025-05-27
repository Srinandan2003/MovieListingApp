import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddMovie from './pages/AddMovie';
import MovieList from './pages/MovieList';
import MovieForm from './components/MovieForm';

function App() {
  return (
 <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Add New Movie</h2>
        <MovieForm />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Movie Collection</h2>
        <MovieList />
      </div>
    </div>
  );
}

export default App;
