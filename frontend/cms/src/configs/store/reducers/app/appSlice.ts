import { createSlice } from "@reduxjs/toolkit";

import { App } from "./appTypes";
import * as reducers from "./appReducers";

// Initialize state
const initialState: App = {
    loading: false,
    isSiderCollapse: false
}

// Create slice
const appSlice = createSlice({
    name: "app",
    initialState,
    reducers,
});

// Export actions
export const appActions = appSlice.actions;

// Export reducer
export default appSlice.reducer;