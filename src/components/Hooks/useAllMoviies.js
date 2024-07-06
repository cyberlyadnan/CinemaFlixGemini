import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OPTIONS_TMDB, VIDEO_POPULAR_API, VIDEO_TRENDING_API, VIDEO_UPCOMING_API } from '../../Utils/constants';
import { addMoviesPlaylist } from '../../Utils/movieSlice';

const useAllMovies = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.movies)
  console.log("All movies")

  useEffect(() => {
    const apilist = [VIDEO_POPULAR_API, VIDEO_TRENDING_API, VIDEO_UPCOMING_API];
    
    const getData = async () => {
      try {
        if(store.allMovies.length <= 0){
        const fetchPromises = apilist.map(api => fetch(api,OPTIONS_TMDB).then(response => response.json()));
        const results = await Promise.all(fetchPromises);
        
        results.forEach(apiDataJson => {
          dispatch(addMoviesPlaylist(apiDataJson.results));
        });
      }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getData();
  }, [dispatch]);
};

export default useAllMovies;
