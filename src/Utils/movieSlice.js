import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideoData: null,
    allMovies: []
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideoData = action.payload;
    },
    addMoviesPlaylist: (state, action) => {
      state.allMovies.push(action.payload);
    }
  },
});

export const { addNowPlaying, addTrailerVideo, addMoviesPlaylist } = movieSlice.actions;

export default movieSlice.reducer;
