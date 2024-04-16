import { Language, Theme } from "./configTypes";
import { configActions } from "./configSlice";
import { AppDispatch, AppThunk } from "../..";

// Theme actions
export const setTheme = (theme: Theme): AppThunk => {
	return (dispatch: AppDispatch) => {
		dispatch(configActions.setThemeRequest());

		return new Promise<string|void>((resolve, reject) => {
			try {
				dispatch(configActions.setThemeFulfilled(theme));
				resolve();
			} catch (error: any) {
				dispatch(configActions.setThemeRejected());
				reject(error.message);
			}
		});
	};
};

// Language actions
export const setLanguage = (language: Language): AppThunk => {
    return (dispatch: AppDispatch) => {
        dispatch(configActions.setLanguageRequest());

        return new Promise<string|void>((resolve, reject) => {
            try {
                dispatch(configActions.setLanguageFulfilled(language));
                resolve();
            } catch (error: any) {
                dispatch(configActions.setLanguageRejected());
                reject(error.message);
            }
        });
    };
};