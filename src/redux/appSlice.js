import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        selectedLanguage: "en"
    },
    reducers: {
        setLanguage: (state, action) => {
            state.selectedLanguage = action.payload;
        }
    }
})


export const appActions = appSlice.actions;
export default appSlice;