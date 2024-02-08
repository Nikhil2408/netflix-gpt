import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSlice from "./gptSlice";
import appSlice from "./appSlice";


const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        moviesReducer: moviesSlice.reducer,
        gptReducer: gptSlice.reducer,
        appReducer: appSlice.reducer
    }
})


export default store;