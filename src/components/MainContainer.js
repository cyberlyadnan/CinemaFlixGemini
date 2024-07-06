// import React, { useEffect } from "react";
// import useTrailerVideo from "./Hooks/useTrailerVideo";
// import UseNowPlayingMovies from "./Hooks/UseNowPlayingMovies";
// import useAllMoviies from "./Hooks/useAllMoviies";

// const MainContainer = ({ data }) => {   
//   UseNowPlayingMovies();
//   useAllMoviies() // Call the hook at the top level
//   const { key, original_title, overview } = useTrailerVideo(data);


//   return (
//     <div className="relative z-1 w-screen aspect-video h-full overflow-x-hidden">
//       <div className="absolute top-0 left-0 w-screen aspect-video z-0">
//         <iframe
//           className="w-screen aspect-video"
//           src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&enablejsapi=1`}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//       </div>
//       <div className="relative w-screen aspect-video h-full z-10 p-4 text-white bg-gradient-to-r from-black to-transparent flex flex-col justify-center">
//         <div className="mx-24 w-5/12">
//           <h1 className="text-5xl font-bold">{original_title}</h1>
//           <h3 className="text-xl mt-2">{overview}</h3>
//         </div>
//         <div className="mx-24 my-5">
//           <button className="bg-red-600 text-white mr-3 px-8 py-3 rounded-md hover:bg-red-700 transition duration-300 ease-in-out">
//             Play
//           </button>
//           <button className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-900 transition duration-300 ease-in-out">
//             More Info
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContainer;



// import React, { useEffect } from "react";
// import useTrailerVideo from "./Hooks/useTrailerVideo";
// import UseNowPlayingMovies from "./Hooks/UseNowPlayingMovies";
// import useAllMoviies from "./Hooks/useAllMoviies";

// const MainContainer = ({ data }) => {   
//   UseNowPlayingMovies();
//   useAllMoviies(); // Call the hook at the top level
//   const { key, original_title, overview } = useTrailerVideo(data);

//   return (
//     <div className="relative z-1 w-full aspect-video h-full overflow-x-hidden sm:mt-24 lg:mt-32">
//       <div className="absolute top-0 left-0 w-full aspect-video z-0">
//         <iframe
//           className="w-full aspect-video"
//           src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&enablejsapi=1`}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//         ></iframe>
//       </div>
//       <div className="relative w-full aspect-video h-full z-10 p-4 text-white bg-gradient-to-r from-black to-transparent flex flex-col justify-center">
//         <div className="mx-4 sm:mt-7 sm:mx-8 lg:mx-16 w-10/12 sm:w-8/12 lg:w-6/12">
//           <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">{original_title}</h1>
//           <h3 className="text-xs sm:text-sm lg:text-base mt-2">{overview ? overview.slice(1,100) : ""}</h3>
//         </div>
//         <div className="mx-4 sm:mx-8 lg:mx-16 my-3 sm:my-4 lg:my-5">
//           <button className="bg-red-600 text-white mr-2 sm:mr-3 lg:mr-4 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md hover:bg-red-700 transition duration-300 ease-in-out text-xs sm:text-sm lg:text-base">
//             Play
//           </button>
//           <button className="bg-gray-800 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md hover:bg-gray-900 transition duration-300 ease-in-out text-xs sm:text-sm lg:text-base">
//             More Info
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContainer;




import React from "react";
import useTrailerVideo from "./Hooks/useTrailerVideo";
import UseNowPlayingMovies from "./Hooks/UseNowPlayingMovies";
import useAllMoviies from "./Hooks/useAllMoviies";

const MainContainer = ({ data }) => {
  UseNowPlayingMovies();
  useAllMoviies(); // Call the hook at the top level
  const { key, original_title, overview } = useTrailerVideo(data);

  return (
    <div className="relative z-1 w-full aspect-video h-full overflow-x-hidden sm:mt-24 lg:mt-0">
      <div className="absolute top-0 left-0 w-full aspect-video z-0">
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative w-full aspect-video h-full z-10 p-4 text-white bg-gradient-to-r from-black to-transparent flex flex-col justify-center">
        <div className="mx-4 sm:mx-8 lg:mt-16 mt-12 lg:mx-16 lg:w-5/12">
          <h1 className="text-xl sm:text-sm lg:text-5xl font-bold">{original_title}</h1>
          <h3 className="text-xs sm:text-[10px] lg:text-xl mt-2">{overview ? overview.slice(0, 100) : ""}</h3>
        </div>
        <div className="mx-4 sm:mx-8 lg:mx-16 my-3 sm:my-4 lg:my-5">
          <button className="bg-red-600 text-white mr-2 sm:mr-3 lg:mr-4 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md hover:bg-red-700 transition duration-300 ease-in-out text-xm lg:text-2xl sm:text-base">
            Play
          </button>
          <button className="bg-gray-800 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md hover:bg-gray-900 transition duration-300 ease-in-out text-xm sm:text-sm lg:text-2xl">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;







