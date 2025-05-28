import React, { useState } from 'react';

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
    data.append('upload_preset', 'movie_preset');
    try {
      // Simulate API call for demo
      console.log('Uploading image...');
      return 'https://example.com/image.jpg';
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
      // Simulate API call for demo
      console.log('Movie data:', { ...movie, Image: imageUrl });
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
    <div className="max-w-sm mx-auto bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-3">
        <div>
          <input 
            name="title" 
            placeholder="Movie Title" 
            onChange={handleInputChange} 
            value={movie.title} 
            required 
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <input 
            name="genre" 
            placeholder="Genre" 
            onChange={handleInputChange} 
            value={movie.genre} 
            required 
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input 
            name="releaseYear" 
            placeholder="Year" 
            onChange={handleInputChange} 
            value={movie.releaseYear} 
            required 
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <textarea 
            name="description" 
            placeholder="Description" 
            onChange={handleInputChange} 
            value={movie.description} 
            required 
            rows="3"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          />
        </div>
        
        <div>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            required 
            className="w-full px-2 py-1.5 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
        
        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 text-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
        >
          {loading ? 'Uploading...' : 'Add Movie'}
        </button>
      </div>
    </div>
  );
};

export default MovieForm;