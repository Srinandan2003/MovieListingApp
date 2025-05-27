import React, { useState } from 'react';
import axios from 'axios';

const MovieForm = () => {
  const [movie, setMovie] = useState({
    title: '',
    genre: '',
    releaseYear: '',
    description: '',
    Image: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const uploadImageToCloudinary = async () => {
    const data = new FormData();
    data.append('file', imageFile);
    data.append('upload_preset', 'movie_preset'); // your unsigned preset
    try {
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/ddwtk0q2s/image/upload',
        data
      );
      return res.data.secure_url;
    } catch (error) {
      console.error('Image upload failed:', error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const imageUrl = await uploadImageToCloudinary();
    if (!imageUrl) return;

    try {
      const response = await axios.post('https://movielistingapp-cqg8.onrender.com/movies/', {
        ...movie,
        Image: imageUrl,
      });
      alert('Movie added successfully!');
      setMovie({ title: '', genre: '', releaseYear: '', description: '', Image: '' });
      setImageFile(null);
    } catch (error) {
      console.error('Error creating movie:', error);
      alert('Failed to create movie.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            name="title" 
            placeholder="Movie Title" 
            onChange={handleInputChange} 
            value={movie.title} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <input 
            name="genre" 
            placeholder="Genre" 
            onChange={handleInputChange} 
            value={movie.genre} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <input 
            name="releaseYear" 
            placeholder="Release Year" 
            onChange={handleInputChange} 
            value={movie.releaseYear} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <textarea 
            name="description" 
            placeholder="Description" 
            onChange={handleInputChange} 
            value={movie.description} 
            required 
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
        
        <div>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
        >
          {loading ? 'Uploading...' : 'Add Movie'}
        </button>
      </form>
    </div>
  );
};

export default MovieForm;