// Theme options
export enum Theme {
	Dark = "dark",
	Default = "default",
}

export enum Language {
	English = "en",
    Vietnamese = "vi",
}

// Initalize Config type
export interface Config {
	theme?: Theme;
    loading: boolean;
	language?: Language;
}
