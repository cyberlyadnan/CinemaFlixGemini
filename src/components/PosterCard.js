// import React from 'react';

// const PosterCard = ({ imageId }) => {
//   const imageUrl = `https://image.tmdb.org/t/p/w500${imageId}`;

//   return (
//     <div className="min-w-[200px] max-w-[400px]">
//       <img src={imageUrl} alt="Movie Poster" className="w-full h-auto rounded-lg shadow-md" />
//     </div>
//   );
// };

// export default PosterCard;

import React from 'react';

const PosterCard = ({ imageId }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${imageId}`;

  return (
    <div className=" mr-4 mb-12 ">
      <img src={imageUrl} alt="Movie Poster" className="min-w-[130px] sm:min-w-[150px] lg:min-w-[180px] w-full h-auto rounded-md cursor-pointer hover:lg:min-w-[160px] hover:sm:min-w-[160px] hover:lg:shadow-white" />
    </div>
  );
};

export default PosterCard;
