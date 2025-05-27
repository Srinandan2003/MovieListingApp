Movie Collection App Documentation
A full-stack web application for managing your personal movie collection with image upload capabilities.
🚀 Features

```
Frontend - https://movie-listing-app-psi.vercel.app/
Backend - https://movielistingapp-cqg8.onrender.com
```
Add Movies: Create new movie entries with title, genre, year, description, and images.
View Movies: Browse your movie collection in a responsive grid layout.
Search Movies: Search by title, genre, year, or across all fields.
Delete Movies: Remove movies from your collection.
Image Upload: Upload movie posters via Cloudinary integration.
Responsive Design: Works seamlessly on desktop and mobile devices.

🛠️ Tech Stack
Frontend - https://movie-listing-app-psi.vercel.app/

React: UI library
Tailwind CSS: Styling framework
Axios: HTTP client for API calls
React Router: Navigation

Backend - "https://movielistingapp-cqg8.onrender.com"

Node.js: Runtime environment
Express.js: Web framework
MongoDB: Database
Mongoose: MongoDB object modeling
Cloudinary: Image storage and management

📁 Project Structure
```
movie-app/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/
│   │   │   ├── MovieForm.js
│   │   │   └── MovieCard.js
│   │   ├── pages/
│   │   │   └── MovieList.js
│   │   └── App.js
│   └── package.json
├── server/                 # Backend API
│   ├── models/
│   │   └── movie.model.js
│   ├── routes/
│   │   └── movie.routes.js
│   ├── middlewares/
│   │   └── getMovie.middleware.js
│   └── server.js
└── README.md
```
🗄️ Database Schema
```
Movie Model
{
  "_id": ObjectId,
  "title": String,           // Movie title (required)
  "genre": String,           // Movie genre (required)
  "releaseYear": Number,     // Release year (required)
  "description": String,     // Movie description (required)
  "Image": String           // Cloudinary image URL (required)
}
```
🔌 API Endpoints
```
Production: https://movielistingapp-cqg8.onrender.com
Development: http://localhost:5000
```
Movies Routes (/movies)
GET /movies
Get all movies from the collection.
```
Response:
[
  {
    "_id": "64a1b2c3d4e5f6789012345",
    "title": "The Matrix",
    "genre": "Sci-Fi",
    "releaseYear": 1999,
    "description": "A computer programmer discovers reality is a simulation.",
    "Image": "https://res.cloudinary.com/ddwtk0q2s/image/upload/v1234567890.jpg"
  }
]
```
POST /movies
Create a new movie entry.
Request Body:
```
{
  "title": "The Matrix",
  "genre": "Sci-Fi",
  "releaseYear": 1999,
  "description": "A computer programmer discovers reality is a simulation.",
  "Image": "https://res.cloudinary.com/ddwtk0q2s/image/upload/v1234567890.jpg"
}
```
Response:
```
{
  "_id": "64a1b2c3d4e5f6789012345",
  "title": "The Matrix",
  "genre": "Sci-Fi",
  "releaseYear": 1999,
  "description": "A computer programmer discovers reality is a simulation.",
  "Image": "https://res.cloudinary.com/ddwtk0q2s/image/upload/v1234567890.jpg"
}
```
PATCH /movies/:id
Update an existing movie by ID.
Request Body (all fields optional):
```
{
  "title": "Updated Title",
  "genre": "Updated Genre",
  "releaseYear": 2000,
  "description": "Updated description",
  "Image": "new-image-url"
}
```
DELETE /movies/:id
Delete a movie by ID.
Response:
```
{
  "message": "Movie deleted successfully"
}
```
🎨 Frontend Components
App.js
Main application component with a two-column layout.

Left: Movie form (1/3 width)
Right: Movie list (2/3 width)

MovieForm.js
Form component for adding new movies.

Props: onMovieAdded (callback function)
Features:
Form validation
Image upload to Cloudinary
Loading states
Form reset after submission



MovieList.js
Component for displaying and searching movies.

Props: movies, onMovieDeleted (optional)
Features:
Real-time search functionality
Search by title, genre, year, or all fields
Responsive grid layout
Empty state handling



MovieCard.js
Individual movie display component.

Props: movie object
Features:
Movie poster display
Movie details
Delete functionality



🔧 Setup Instructions
Prerequisites

Node.js (v14 or higher)
MongoDB database
Cloudinary account

Backend Setup

Clone the repository:
git clone <repository-url>
cd movie-app/server


Install dependencies:
npm install express mongoose cors dotenv


Environment Variables:Create a .env file in the server directory:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/moviedb
# or MongoDB Atlas URI: mongodb+srv://username:password@cluster.mongodb.net/moviedb


Start the server:
# Development
npm run dev

# Production
npm start



Frontend Setup

Navigate to client directory:
cd movie-app/client


Install dependencies:
npm install react react-dom axios tailwindcss


Configure Tailwind CSS:
npx tailwindcss init

BACKEND:
Update API endpoints:Update the API base URL in your components:
// For development
const API_URL = "http://localhost:5000";

// For production
const API_URL = "https://movielistingapp-cqg8.onrender.com";

Start the development server:
npm start



Cloudinary Setup

Create a Cloudinary account at cloudinary.com.
Create upload preset:
Go to Settings → Upload
Create an unsigned upload preset
Name it movie_preset


Update Cloudinary config in MovieForm.js:const uploadImageToCloudinary = async () => {
  const data = new FormData();
  data.append('file', imageFile);
  data.append('upload_preset', 'movie_preset');
  
  const res = await axios.post(
    'https://api.cloudinary.com/v1_1/your_cloud_name/image/upload',
    data
  );
  return res.data.secure_url;
};



📱 Responsive Design
The application is fully responsive with:

Desktop: Two-column layout (form left, movies right)
Tablet: Stacked layout with proper spacing
Mobile: Single-column with touch-friendly interface

🚀 Deployment
Backend (Render)

Create an account on Render.
Connect your repository to Render.
Set environment variables (e.g., MONGODB_URI, PORT) in the Render dashboard.
Deploy the backend service.
Verify the backend URL: https://movielistingapp-cqg8.onrender.com

Frontend (Vercel)

Create an account on Vercel.
Connect your repository to Vercel.
Build the React app: npm run build
Deploy the build folder.
Update API endpoints in the frontend to point to the production backend URL: https://movielistingapp-cqg8.onrender.com
Access the deployed frontend at: https://movie-listing-app-psi.vercel.app





