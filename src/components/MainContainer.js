import React, { useEffect } from "react";
import useTrailerVideo from "./Hooks/useTrailerVideo";
import UseNowPlayingMovies from "./Hooks/UseNowPlayingMovies";
import useAllMoviies from "./Hooks/useAllMoviies";

const MainContainer = ({ data }) => {   
  UseNowPlayingMovies();
  useAllMoviies() // Call the hook at the top level
  const { key, original_title, overview } = useTrailerVideo(data);


  return (
    <div className="relative z-1 w-screen aspect-video h-full overflow-x-hidden">
      <div className="absolute top-0 left-0 w-screen aspect-video z-0">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="relative w-screen aspect-video h-full z-10 p-4 text-white bg-gradient-to-r from-black to-transparent flex flex-col justify-center">
        <div className="mx-24 w-5/12">
          <h1 className="text-5xl font-bold">{original_title}</h1>
          <h3 className="text-xl mt-2">{overview}</h3>
        </div>
        <div className="mx-24 my-5">
          <button className="bg-red-600 text-white mr-3 px-8 py-3 rounded-md hover:bg-red-700 transition duration-300 ease-in-out">
            Play
          </button>
          <button className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-900 transition duration-300 ease-in-out">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
