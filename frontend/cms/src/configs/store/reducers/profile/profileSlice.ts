import { createSlice } from "@reduxjs/toolkit";

import { ProfileState } from "./profileTypes";
import * as reducers from "./profileReducers";

// Initialize state
const initialState: ProfileState = {
    loading: false,
}

// Create slice
const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers,
});

// Export actions
export const profileActions = profileSlice.actions;

// Export reducer
export default profileSlice.reducer;