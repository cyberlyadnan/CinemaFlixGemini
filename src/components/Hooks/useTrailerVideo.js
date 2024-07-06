// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { OPTIONS_TMDB, VIDEO_KEY_FETCH_API } from '../../Utils/constants';
// import { addTrailerVideo } from '../../Utils/movieSlice';

// const useTrailerVideo = (data) => {
//     console.log("usetrailer vide")
//     const dispatch = useDispatch();
//     const [selectedTrailer, setSelectedTrailer] = useState(null);
//     const store = useSelector((state) => state.movies.trailerVideoData);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const randomVideoIndex = Math.floor(Math.random() * 30) + 1;
//                 const trailer = data[randomVideoIndex];
//                 setSelectedTrailer(trailer);

//                 if (trailer) {
//                     const apiData = await fetch(`${VIDEO_KEY_FETCH_API}${trailer.id}/videos?`, OPTIONS_TMDB);
//                     const apiDataJson = await apiData.json();
//                     const trailerVideo = apiDataJson?.results.find(result => result.type === "Trailer");

//                     if (trailerVideo) {
//                         dispatch(addTrailerVideo(trailerVideo));
//                     }
//                 }
//             } catch (error) {
//                 console.error('Error fetching trailer video:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     // Return relevant data to use in components
//     return {
//         key: store?.key,
//         original_title: selectedTrailer?.original_title,
//         overview: selectedTrailer?.overview
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
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const trailerVideoData = useSelector((store) => store.movies.trailerVideoData);

    useEffect(() => {
        const fetchData = async () => {
            if (nowPlayingMovies) {
                const randomVideoIndex = Math.floor(Math.random() * nowPlayingMovies.length);
                const selectedVideo = nowPlayingMovies[randomVideoIndex];

                if (selectedVideo) {
                    const apiData = await fetch(`${VIDEO_KEY_FETCH_API}${selectedVideo.id}/videos?language=en-IN`, OPTIONS_TMDB);
                    const apiDataJson = await apiData.json();
                    const trailer = apiDataJson?.results?.find(result => result.type === "Trailer");

                    if (trailer) {
                        dispatch(addTrailerVideo(trailer));
                        setTrailerVideo(selectedVideo);
                    }
                }
            }
        };

        fetchData();
    }, [dispatch, nowPlayingMovies]);

    return {
        key: trailerVideoData?.key,
        original_title: trailerVideo?.original_title,
        overview: trailerVideo?.overview,
    };
};

export default useTrailerVideo;

