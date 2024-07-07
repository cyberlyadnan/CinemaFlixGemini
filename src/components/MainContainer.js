// import React, { useState } from "react";
// import useTrailerVideo from "./Hooks/useTrailerVideo";
// import UseNowPlayingMovies from "./Hooks/UseNowPlayingMovies";
// import useAllMoviies from "./Hooks/useAllMoviies";
// import useGenerateContent from "./Hooks/usegenerateContent";

// const MainContainer = ({ data }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   // const { movies, loading, error } = useGenerateContent(searchQuery);
//   const [videoList, setvideoList] = useState(null)
//   UseNowPlayingMovies();
//   useAllMoviies(); // Call the hook at the top level
//   const { key, original_title, overview } = useTrailerVideo(data);

//   const handleSearch = () => {
//     // This will trigger the hook to fetch new data
//     setvideoList(useGenerateContent(searchQuery))
//   };

//   console.log(videoList)
//   return (
//     <div className="relative z-1 w-full aspect-video h-full overflow-x-hidden sm:mt-24 lg:mt-0">
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
//         <div className="mx-4 sm:mx-8 lg:mt-16 mt-12 lg:mx-16 lg:w-5/12">
//           <h1 className="text-xl sm:text-sm lg:text-5xl font-bold">
//             {original_title}
//           </h1>
//           <h3 className="text-xs sm:text-[10px] lg:text-xl mt-2">
//             {overview ? overview.slice(0, 100) : ""}
//           </h3>
//         </div>
//         <div className="mx-4 sm:mx-8 lg:mx-16 my-3 sm:my-4 lg:my-5">
//           <button className="bg-red-600 text-white mr-2 sm:mr-3 lg:mr-4 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md hover:bg-red-700 transition duration-300 ease-in-out text-xm lg:text-2xl sm:text-base">
//             Play
//           </button>
//           <button className="bg-gray-800 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md hover:bg-gray-900 transition duration-300 ease-in-out text-xm sm:text-sm lg:text-2xl">
//             More Info
//           </button>
//         </div>
//         <div className="mt-4 lg:mx-16 mb-8 md:mb-16 flex flex-col md:flex-row items-center">
//           <input
//             type={searchQuery}
//             onChange={(e)=>{
//               setSearchQuery(e.target.value)
//             }}
//             placeholder="AI integrated Search"
//             className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4 bg-black bg-opacity-50 border border-gray-600 text-white p-3 rounded"
//           />
//           <button onClick={handleSearch} className="w-full md:w-auto text-white px-5 py-3 bg-red-600 hover:bg-red-700 rounded font-semibold">
//             Search Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContainer;

// import React, { useRef, useState, useEffect } from "react";
// import useTrailerVideo from "./Hooks/useTrailerVideo";
// import UseNowPlayingMovies from "./Hooks/UseNowPlayingMovies";
// import useAllMovies from "./Hooks/useAllMoviies";
// import useGenerateContent from "./Hooks/usegenerateContent";
// import { useDispatch } from "react-redux";
// import { addSearch, clearSearch } from "../Utils/searchResultsSlice";

// const MainContainer = ({ data }) => {
  // const [searchQuery, setSearchQuery] = useState("");
  // const [triggerSearch, setTriggerSearch] = useState(false);
  // const [placeholder, setplaceholder] = useState("AI integrated Search")
  // const searchText = useRef(null);
  // const dispatch = useDispatch()

  // // Call necessary hooks
  // UseNowPlayingMovies();
  // useAllMovies();
  // const { key, original_title, overview } = useTrailerVideo(data);

  // // Call useGenerateContent hook at the top level
  // const { movies, loading, error } = useGenerateContent(searchQuery, triggerSearch);

  // // if (loading){
  // //   setplaceholder("Loading...")
  // // }

  // const handleSearch = () => {
  //   setTriggerSearch(true);
  //   if (movies.length > 0){
  //     dispatch(clearSearch())
  //     movies.map((movie)=> dispatch(addSearch(movie)))
  //   }
  // };

  // useEffect(() => {
  //   if (triggerSearch) {
  //     setTriggerSearch(false);
  //   }
  //   return (()=>{
  //     // setSearchQuery("")
  //   }
  //   )
  // }, [triggerSearch]);

//   const [searchQuery, setSearchQuery] = useState("");
//   const [triggerSearch, setTriggerSearch] = useState(false);
//   const [placeholder, setPlaceholder] = useState("AI integrated Search");
//   const searchText = useRef(null);
//   const dispatch = useDispatch();

//   // Call necessary hooks
//   UseNowPlayingMovies();
//   useAllMovies();
//   const { key, original_title, overview } = useTrailerVideo(data);

//   // Call useGenerateContent hook at the top level
//   const { movies, loading, error } = useGenerateContent(
//     searchQuery,
//     triggerSearch
//   );

//   useEffect(() => {
//     if (loading) {
//       setPlaceholder("Loading...");
//     } else {
//       setPlaceholder("AI integrated Search");
//     }
//   }, [loading]);

//   useEffect(() => {
//     if (triggerSearch && !loading) {
//       if (movies.length > 0) {
//         dispatch(clearSearch());
//         movies.forEach((movie) => dispatch(addSearch(movie)));
//       }
//       setTriggerSearch(false);
//     }
//   }, [triggerSearch, loading, movies, dispatch]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setTriggerSearch(true);
//   };
//   return (
//     <div className="relative z-1 w-full aspect-video h-full overflow-x-hidden sm:mt-24 lg:mt-0">
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
//         <div className="mx-4 mt-48 sm:mx-8 lg:mt-16  lg:mx-16 lg:w-5/12">
//           <h1 className="text-xl sm:text-sm lg:text-5xl font-bold">
//             {original_title}
//           </h1>
//           <h3 className="text-xs sm:text-[10px] lg:text-xl mt-2">
//             {overview ? overview.slice(0, 100) : ""}
//           </h3>
//         </div>
//         <div className="mx-4 sm:mx-8 lg:mx-16 my-3 sm:my-4 lg:my-5">
//           <button className="bg-red-600 text-white mr-2 sm:mr-3 lg:mr-4 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md hover:bg-red-700 transition duration-300 ease-in-out text-xm lg:text-2xl sm:text-base">
//             Play
//           </button>
//           <button className="bg-gray-800 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md hover:bg-gray-900 transition duration-300 ease-in-out text-xm sm:text-sm lg:text-2xl">
//             More Info
//           </button>
//         </div>
//         <div className="mt-4 lg:mx-16 mb-8 md:mb-16 flex flex-col md:flex-row items-center">
//           <form
//             className="w-full"
//             onSubmit={(e) => {
//               e.preventDefault();
//             }}
//           >
//             <input
//               ref={searchText}
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder={placeholder}
//               className="md:w-1/3 mb-4 md:mb-0 md:mr-4 bg-black bg-opacity-50 border border-gray-600 text-white p-3 rounded"
//             />
//             <button
//               onClick={handleSearch}
//               className="w-full md:w-auto text-white px-5 py-3 bg-red-600 hover:bg-red-700 rounded font-semibold"
//             >
//               Search Now
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainContainer;




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
  const { movies, loading, error } = useGenerateContent(searchQuery, triggerSearch);


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
                className="lg:w-2/12 w-4/12 lg:m-0 mx-2 lg:h-12 h-8 md:w-auto text-white lg:px-5 lg:py-3 px-3 text-center bg-red-600 hover:bg-red-700 rounded font-semibold"
              >
                Search Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;


