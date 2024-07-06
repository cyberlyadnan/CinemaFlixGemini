import React, { useEffect } from 'react';
import Header from './Header'; // Default import
import { auth } from '../Utils/firebase';
import MainContainer from './MainContainer'; // Default import
import SecondaryContainer from './SecondaryContainer'; // Default import
import { UseNowPlayingMovies } from './Hooks/UseNowPlayingMovies'; // Named import
import { useTrailerVideo } from './Hooks/useTrailerVideo'; // Named import
import { useSelector } from 'react-redux';

const Browse = () => {
  const Videos = useSelector((store) => store.movies.nowPlayingMovies);
  const store = useSelector((store) => store.user);
  const loggedIN = store ? true : false;
  // const loggedIN = auth.currentUser ? true : false;

  return (
    <div className='lg:h-full h-full'>
      <Header showProfile={true} showNavLinks={true} signInButton={false} islogOut={loggedIN} isIcon={true} />
      <MainContainer data={Videos} className="bg-gradient-to-b from-black via-black to-transparent" />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
