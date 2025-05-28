import { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const shouldShowReadMore = movie.description && movie.description.length > 120;

  return (
    <div className="border border-gray-200 rounded bg-white overflow-hidden hover:border-gray-300 transition-colors">
      <img 
        src={movie.Image} 
        alt={movie.title} 
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">{movie.title}</h3>
        
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-600">
          <span>{movie.releaseYear}</span>
          <span>•</span>
          <span>{movie.genre}</span>
        </div>
        
        <div className="text-xs text-gray-600 leading-relaxed">
          {showFullDescription ? (
            <>
              {movie.description}
              {shouldShowReadMore && (
                <button
                  onClick={() => setShowFullDescription(false)}
                  className="text-blue-600 hover:text-blue-700 ml-1 font-medium"
                >
                  Show less
                </button>
              )}
            </>
          ) : (
            <>
              {truncateText(movie.description)}
              {shouldShowReadMore && (
                <button
                  onClick={() => setShowFullDescription(true)}
                  className="text-blue-600 hover:text-blue-700 ml-1 font-medium"
                >
                  Read more
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;