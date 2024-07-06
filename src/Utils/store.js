import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieSlice from "./movieSlice";

const appstore = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
  },
//   devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools
});

export default appstore;
