import React from 'react';

const PosterCard = ({ imageId }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${imageId}`;

  return (
    <div className="min-w-[200px] max-w-[400px]">
      <img src={imageUrl} alt="Movie Poster" className="w-full h-auto rounded-lg shadow-md" />
    </div>
  );
};

export default PosterCard;
