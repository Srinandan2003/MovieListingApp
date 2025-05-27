import { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
  const [form, setForm] = useState({
    title: '',
    genre: '',
    releaseYear: '',
    description: '',
    image: ''
  });
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "movie_preset");

    setUploading(true);
    const res = await axios.post("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", data);
    setForm({ ...form, image: res.data.secure_url });
    setUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.genre || !form.releaseYear || !form.description || !form.image) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    await axios.post("https://movielistingapp-cqg8.onrender.com/movies", form);
    alert("Movie added!");
    setForm({ title: '', genre: '', releaseYear: '', description: '', image: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="input" />
      <input type="text" placeholder="Genre" value={form.genre} onChange={e => setForm({ ...form, genre: e.target.value })} className="input" />
      <input type="number" placeholder="Release Year" value={form.releaseYear} onChange={e => setForm({ ...form, releaseYear: e.target.value })} className="input" />
      <textarea placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="input" />
      <input type="file" onChange={handleUpload} className="mb-4" />
      {uploading ? <p>Uploading image...</p> : form.image && <img src={form.image} alt="preview" className="h-40 object-cover" />}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 mt-4">Add Movie</button>
    </form>
  );
};

export default AddMovie;
