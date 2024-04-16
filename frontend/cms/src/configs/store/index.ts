import { Action, AnyAction, configureStore, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";

import rootReducer, { RootState } from "./reducers";

// Configuration store
const store = configureStore({
    reducer: rootReducer,
});

// Enable HMR (Hot Module Replacement)
if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => {
        const nextRootReducer = require("./reducers").default;
        store.replaceReducer(nextRootReducer);
    });
}

// Export Dispatch type
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
// Export Action type
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const getState = store.getState();

// Export store
export default store;