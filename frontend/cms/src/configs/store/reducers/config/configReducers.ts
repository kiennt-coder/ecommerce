import { PayloadAction } from "@reduxjs/toolkit";

import { Language, Theme } from "./configTypes";

// Theme reducers
export const setThemeRequest = (state: any, action: PayloadAction) => {
	state.loading = true;
};

export const setThemeFulfilled = (state: any, action: PayloadAction<Theme>) => {
	state.theme = action.payload;
	state.loading = false;
};

export const setThemeRejected = (state: any, action: PayloadAction) => {
	state.loading = false;
};

// Language reducers
export const setLanguageRequest = (state: any, action: PayloadAction) => {
    state.loading = true;
};

export const setLanguageFulfilled = (state: any, action: PayloadAction<Language>) => {
    state.language = action.payload;
    state.loading = false;
};

export const setLanguageRejected = (state: any, action: PayloadAction) => {
    state.loading = false;
};