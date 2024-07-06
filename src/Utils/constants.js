const minDate = '2023-01-01'; // Replace with your desired min date
  const maxDate = '2023-12-31'; // Replace with your desired max date
  const token = process.env.TOKEN
  export const OPTIONS_TMDB = {
      headers: {
        Authorization: `Bearer ${token}`,
        accept: 'application/json',
      }}

export const demophotoURL = "https://randomuser.me/api/portraits/men/32.jpg"

export const NOW_PLAYING_MOVIE_API = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-IN&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${minDate}&release_date.lte=${maxDate}`

// export const VIDEO_KEY_FETCH_API = `https://api.themoviedb.org/3/movie/movie_id/videos?`
export const VIDEO_KEY_FETCH_API = `https://api.themoviedb.org/3/movie/`

export const VIDEO_POPULAR_API = "https://api.themoviedb.org/3/movie/popular"

export const VIDEO_TRENDING_API = "https://api.themoviedb.org/3/movie/top_rated"

export const VIDEO_UPCOMING_API = "https://api.themoviedb.org/3/movie/upcoming"