import React, { useRef, useState, useEffect } from "react";
import useTrailerVideo from "./Hooks/useTrailerVideo";
import UseNowPlayingMovies from "./Hooks/UseNowPlayingMovies";
import useAllMovies from "./Hooks/useAllMoviies";
import useGenerateContent from "./Hooks/usegenerateContent";
import { useDispatch } from "react-redux";
import { addSearch, clearSearch } from "../Utils/searchResultsSlice";

const MainContainer = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // Call necessary hooks
  UseNowPlayingMovies();
  useAllMovies();
  const { key, original_title, overview } = useTrailerVideo(data);

  // Call useGenerateContent hook at the top level
  const { movies, loading} = useGenerateContent(searchQuery, triggerSearch);


  useEffect(() => {
    if (triggerSearch && !loading) {
      if (movies.length > 0) {
        dispatch(clearSearch());
        movies.forEach((movie) => dispatch(addSearch(movie)));
      }
      setTriggerSearch(false);
    }
  }, [triggerSearch, loading, movies, dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    setTriggerSearch(true);
  };

  return (
    <div className="relative w-full h-full overflow-x-hidden sm:mt-24 lg:mt-0">
      <div className="relative w-full aspect-video h-full overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&enablejsapi=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex flex-col justify-center p-4 text-white">
          <div className="mt-28 lg:mt-0 lg:w-5/12 mx-4 sm:mx-8 lg:mx-16">
            <h1 className="text-xl sm:text-sm lg:text-5xl font-bold">{original_title}</h1>
            <h3 className="text-xs sm:text-[10px] lg:text-xl mt-2">
              {overview ? overview.slice(0, 100) : ""}
            </h3>
          </div>
          <div className="mt-3 sm:mt-4 lg:mt-5 mx-4 sm:mx-8 lg:mx-16">
            <button className="bg-red-600 text-white mr-2 sm:mr-3 lg:mr-4 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md hover:bg-red-700 transition duration-300 ease-in-out text-xm lg:text-2xl sm:text-base">
              Play
            </button>
            <button className="bg-gray-800 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md hover:bg-gray-900 transition duration-300 ease-in-out text-xm sm:text-sm lg:text-2xl">
              More Info
            </button>
          </div>
          <div className="mt-4 mb-8 md:mb-16 flex flex-col md:flex-row items-center lg:mx-16 ">
            <form className="w-full flex" onSubmit={handleSearch}>
              <input
                ref={searchText}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="AI integrated Search"
                className="w-6/12 lg:w-4/12 md:w-1/3 mb-4 lg:ml-0 ml-3 md:mb-0 md:mr-4 bg-black bg-opacity-50 border border-gray-600 text-white lg:p-3 px-2 py-1 rounded"
              />
              <button
  type="submit"
  className="lg:w-2/12 w-4/12 lg:m-0 mx-2 lg:h-12 h-8 md:w-auto text-white lg:px-5 lg:py-3 px-3 text-center bg-red-600 hover:bg-red-700 rounded font-semibold flex items-center justify-center"
>
  {loading ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="26"
      height="26"
    >
      <radialGradient id="a7" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)">
        <stop offset="0" stop-color="#FFFFFF"></stop>
        <stop offset=".3" stop-color="#FFFFFF" stop-opacity=".9"></stop>
        <stop offset=".6" stop-color="#FFFFFF" stop-opacity=".6"></stop>
        <stop offset=".8" stop-color="#FFFFFF" stop-opacity=".3"></stop>
        <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"></stop>
      </radialGradient>
      <circle
        transform-origin="center"
        fill="none"
        stroke="url(#a7)"
        stroke-width="16"
        stroke-linecap="round"
        stroke-dasharray="200 1000"
        stroke-dashoffset="0"
        cx="100"
        cy="100"
        r="70"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="spline"
          dur="2"
          values="360;0"
          keyTimes="0;1"
          keySplines="0 0 1 1"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
      <circle
        transform-origin="center"
        fill="none"
        opacity=".2"
        stroke="#FFFFFF"
        stroke-width="16"
        stroke-linecap="round"
        cx="100"
        cy="100"
        r="70"
      ></circle>
    </svg>
  ) : (
    "Search Now"
  )}
</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;


