// import React, { useEffect } from 'react'
// import Header from "./Header"
// import { auth } from '../Utils/firebase'
// import { NOW_PLAYING_MOVIE_API, OPTIONS_TMDB } from '../Utils/constants'
// import { useDispatch, useSelector } from 'react-redux'
// import { addNowPlaying } from '../Utils/movieSlice'
// import MainContainer from './MainContainer'
// import SecondaryContainer from './SecondaryContainer'

// const Browse = () => {
//   const dispatch = useDispatch()
//   const store = useSelector((store)=> store.movies.nowPlayingMovies)
//   const loggedIN = auth.currentUser ? true : false
  
//   useEffect(()=>{
//     const getData = async ()=>{
//       const apidata = await fetch(NOW_PLAYING_MOVIE_API, OPTIONS_TMDB)
//       const apiDataJson = await apidata.json()
//       dispatch(addNowPlaying(apiDataJson.results))
//     }

//     getData()
//   },[dispatch])

//   return (
//     <>
//     <div className='absolute'>
//     <Header showProfile={true} showNavLinks={true} signInButton={false} islogOut={loggedIN} isIcon={true}/>
//     <MainContainer />
//     <SecondaryContainer />
//     </div>

//     </>
//   )
// }

// export default Browse


import React, { useEffect } from 'react';
import Header from "./Header";
import { auth } from '../Utils/firebase';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import UseNowPlayingMovies from './Hooks/UseNowPlayingMovies';
import useTrailerVideo from './Hooks/useTrailerVideo';
import { useSelector } from 'react-redux';

const Browse = () => {
  const Videos = useSelector((store) => store.movies.nowPlayingMovies);
  const store = useSelector((store) => store.user);
  const loggedIN = store ? true : false;
  // const loggedIN = auth.currentUser ? true : false;

  return (
    <div>
      <Header showProfile={true} showNavLinks={true} signInButton={false} islogOut={loggedIN} isIcon={true} />
      <MainContainer data={Videos} className="bg-gradient-to-b from-black via-black to-transparent"/>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

