import { createSlice } from "@reduxjs/toolkit";

import * as reducers from "./configReducers";
import { Config, Language, Theme } from "./configTypes";

// Initialize state
const initialState: Config = {
    loading: false,
    theme: Theme.Default,
    language: Language.English
}

// Create slice
const configSlice = createSlice({
    name: "configs",
    initialState,
    reducers,
});

// Export actions
export const configActions = configSlice.actions;

// Export reducer
export default configSlice.reducer;