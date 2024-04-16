import { combineReducers } from "@reduxjs/toolkit";

import app from "./app/appSlice";
import configs from "./config/configSlice";

// Combine reducers
const rootReducer = combineReducers({
	app, // App reducer
	configs, // Config reducer
});

// Export Root state type
export type RootState = ReturnType<typeof rootReducer>;

// Export Root reducer
export default rootReducer;
