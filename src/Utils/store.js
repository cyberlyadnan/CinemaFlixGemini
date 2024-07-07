import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";
import searchSlice from "./searchResultsSlice";


const appstore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    search: searchSlice
  },
//   devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools
});

export default appstore;
