// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { OPTIONS_TMDB, VIDEO_KEY_FETCH_API } from '../../Utils/constants';
// import { addTrailerVideo } from '../../Utils/movieSlice';

// const useTrailerVideo = () => {
//     const dispatch = useDispatch();
//     const [trailerVideo, setTrailerVideo] = useState(null);
//     const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
//     const trailerVideoData = useSelector((store) => store.movies.trailerVideoData);

//     useEffect(() => {
//         const fetchData = async () => {
//             if (nowPlayingMovies) {
//                 const randomVideoIndex = Math.floor(Math.random() * nowPlayingMovies.length);
//                 const selectedVideo = nowPlayingMovies[randomVideoIndex];

//                 if (selectedVideo) {
//                     const apiData = await fetch(`${VIDEO_KEY_FETCH_API}${selectedVideo.id}/videos?language=en-IN`, OPTIONS_TMDB);
//                     const apiDataJson = await apiData.json();
//                     const trailer = apiDataJson?.results?.find(result => result.type === "Trailer");

//                     if (trailer) {
//                         dispatch(addTrailerVideo(trailer));
//                         setTrailerVideo(selectedVideo);
//                     }
//                 }
//             }
//         };

//         fetchData();
//     }, [dispatch, nowPlayingMovies]);

//     return {
//         key: trailerVideoData?.key,
//         original_title: trailerVideo?.original_title,
//         overview: trailerVideo?.overview,
//     };
// };

// export default useTrailerVideo;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OPTIONS_TMDB, VIDEO_KEY_FETCH_API } from '../../Utils/constants';
import { addTrailerVideo } from '../../Utils/movieSlice';

const useTrailerVideo = () => {
    const dispatch = useDispatch();
    const [trailerVideo, setTrailerVideo] = useState(null);
    const [error, setError] = useState(null);
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const trailerVideoData = useSelector((store) => store.movies.trailerVideoData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (nowPlayingMovies) {
                    const randomVideoIndex = Math.floor(Math.random() * nowPlayingMovies.length);
                    const selectedVideo = nowPlayingMovies[randomVideoIndex];

                    if (selectedVideo) {
                        const response = await fetch(`${VIDEO_KEY_FETCH_API}${selectedVideo.id}/videos?language=en-IN`, OPTIONS_TMDB);
                        if (!response.ok) {
                            throw new Error('Failed to fetch trailer video');
                        }
                        const apiDataJson = await response.json();
                        const trailer = apiDataJson?.results?.find(result => result.type === "Trailer");

                        if (trailer) {
                            dispatch(addTrailerVideo(trailer));
                            setTrailerVideo(selectedVideo);
                        } else {
                            throw new Error('Trailer not found');
                        }
                    }
                }
            } catch (err) {
                console.error('Error fetching trailer video:', err);
                setError(err.message);
            }
        };

        fetchData();
    }, [dispatch, nowPlayingMovies]);

    return {
        key: trailerVideoData?.key,
        original_title: trailerVideo?.original_title,
        overview: trailerVideo?.overview,
        error,
    };
};

export default useTrailerVideo;


