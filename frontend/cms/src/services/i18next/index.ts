import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { Resource } from "./i18nextTypes";
import { getState } from "../../configs/store";
import {locale_en, locale_vi} from "./locales";

// State without Component
const configs = getState.configs;

// Create resource
const resources: Resource = {
	en: locale_en,
	vi: locale_vi,
};

// Initialize i18next
i18next.use(initReactI18next).init({
	resources,
	lng: configs.language,
	fallbackLng: configs.language,
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
	react: {
		useSuspense: false,
	},
});

export default i18next;
