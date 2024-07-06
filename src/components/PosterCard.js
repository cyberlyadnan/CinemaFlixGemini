import React from 'react';

const PosterCard = ({ imageId }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${imageId}`;

  return (
    <div className=" mr-4 mb-12 ">
      <img src={imageUrl} alt="Movie Poster" className="min-w-[130px] sm:min-w-[150px] lg:min-w-[180px] w-full h-auto rounded-md cursor-pointer hover:shadow-white" />
    </div>
  );
};

export default PosterCard;
