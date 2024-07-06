import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NOW_PLAYING_MOVIE_API, OPTIONS_TMDB } from '../../Utils/constants';
import { addNowPlaying } from '../../Utils/movieSlice';

function UseNowPlayingMovies() {
    const dispatch = useDispatch();
    
    useEffect(() => {
      const getData = async () => {
        const apidata = await fetch(NOW_PLAYING_MOVIE_API, OPTIONS_TMDB);
        const apiDataJson = await apidata.json();
        dispatch(addNowPlaying(apiDataJson.results))
      };
  
      getData();
    }, [dispatch]);
}

export default UseNowPlayingMovies
