import { combineReducers } from "@reduxjs/toolkit";

import app from "./app/appSlice";
import configs from "./config/configSlice";
import profile from "./profile/profileSlice";

// Combine reducers
const rootReducer = combineReducers({
	app, // App reducer
	configs, // Config reducer
	profile, // Profile reducer
});

// Export Root state type
export type RootState = ReturnType<typeof rootReducer>;

// Export Root reducer
export default rootReducer;
