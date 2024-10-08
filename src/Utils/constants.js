const minDate = '2023-01-01'; // Replace with your desired min date
const maxDate = '2023-12-31'; // Replace with your desired max date
const token = process.env.REACT_APP_TMDB_BEARER_TOKEN; // Use the correct environment variable
export const OPTIONS_TMDB = {
    headers: {
        Authorization: `Bearer ${token}`,
        accept: 'application/json',
    }
};

export const demophotoURL = "https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png";

export const NOW_PLAYING_MOVIE_API = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-IN&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${minDate}&release_date.lte=${maxDate}`;

export const VIDEO_KEY_FETCH_API = `https://api.themoviedb.org/3/movie/`;

export const VIDEO_POPULAR_API = "https://api.themoviedb.org/3/movie/popular";

export const VIDEO_TRENDING_API = "https://api.themoviedb.org/3/movie/top_rated";

export const VIDEO_UPCOMING_API = "https://api.themoviedb.org/3/movie/upcoming";

export const TV_AIRING_LIST_API = `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1`

export const TV_API1 = `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1`
export const TV_API2 =  `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1`
export const TV_API3  = `https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1`

export const MOVIE_SEARCH_API = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=`



export const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent'

export const movieCategories = [
    "Trending Now",
    "Popular on Netflix",
    "Upcoming Releases",
    "Top Picks for You",
    "New Releases",
    "Award-Winning Movies",
    "Critically Acclaimed"]