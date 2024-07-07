import React, { useEffect } from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Browse = () => {
  const videos = useSelector((store) => store.movies.nowPlayingMovies);
  const user = useSelector((store) => store.user);
  const loggedIn = !!user; // Check if user object exists to determine logged in status
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login page if user is not logged in
    if (!loggedIn) {
      navigate('/login');
    }
  }, [loggedIn, navigate]);

  

  return (
    <div className='lg:h-full h-full'>
      <Header showProfile={true} showNavLinks={true} signInButton={false} islogOut={loggedIn} isIcon={true} />
      <MainContainer data={videos} className="bg-gradient-to-b from-black via-black to-transparent" />
      <SecondaryContainer />
      <Footer />
    </div>
  );
};

export default Browse;
