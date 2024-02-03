import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
        removeUser: (state) => {
            return null;
        }
    }
})

export const userActions = userSlice.actions;
export default userSlice;