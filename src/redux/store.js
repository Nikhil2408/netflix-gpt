import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";


const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        moviesReducer: moviesSlice.reducer
    }
})


export default store;