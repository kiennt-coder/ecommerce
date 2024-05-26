import { ThemeConfig, theme } from "antd";

export const defaultThemeConfig: ThemeConfig = {
	algorithm: theme.defaultAlgorithm,
	token: {
		// base color
		colorBgBase: "#F5F6FA",
		colorTextBase: "#202224",
		colorBgContainer: "#FFFFFF",
		colorTextDescription: "#606060",
		fontFamily: "'Nunito Sans', sans-serif",

		// primary color
		colorPrimary: "#4880FF",
	},
	components: {
		Layout: {
			headerHeight: 70,
			headerPadding: "0 24px",
			footerPadding: "16px",
		},
		Input: {
			colorBgContainer: "#F1F4F9",
			colorBorder: "#D5D5D5",
        },
		Menu: {
			itemSelectedColor: "#FFFFFF",
			itemSelectedBg: "#4880FF",
			activeBarBorderWidth: 0
		},
		Card: {
			borderRadiusLG: 24,
		}
	},
};
