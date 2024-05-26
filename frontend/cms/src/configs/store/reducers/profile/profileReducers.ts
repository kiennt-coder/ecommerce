import { PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "./profileTypes";

// Register Account reducers
export const registerAccountRequest = (state: any, action: PayloadAction) => {
	state.loading = true;
};

export const registerAccountFulfilled = (state: any, action: PayloadAction) => {
	state.loading = false;
};

export const registerAccountRejected = (state: any, action: PayloadAction) => {
	state.loading = false;
};

// Login Account reducers
export const loginAccountRequest = (state: any, action: PayloadAction) => {
    state.loading = true;
};

export const loginAccountFulfilled = (state: any, action: PayloadAction<Profile>) => {
    state.account = action.payload.account;
    state.auth = action.payload.auth;
    state.loading = false;
};

export const loginAccountRejected = (state: any, action: PayloadAction) => {
    state.loading = false;
};
