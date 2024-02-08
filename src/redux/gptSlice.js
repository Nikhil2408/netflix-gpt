import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {gptView: false},
    reducers: {
        toggleGptSearchView: (state) => {
           state.gptView = !state.gptView
        }
    }
})


export const gptActions = gptSlice.actions;
export default gptSlice;