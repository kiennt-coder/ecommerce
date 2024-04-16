import { theme, ThemeConfig } from "antd";

export const darkThemeConfig: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
        // base color
        colorBgBase: "#1B2431",
        colorTextBase: "#FFFFFF",
		fontFamily: "'Nunito Sans', sans-serif",

        // primary color
        colorPrimary: "#4880FF",
        colorPrimaryBg: "#4880FF",
    },
    components: {
		Layout: {
			headerHeight: 70,
			headerPadding: "0 24px",
			footerPadding: "16px",
		},
        Input: {
            borderRadius: 19,
            // colorBgContainer: "#F1F4F9",
			// colorBorder: "#D5D5D5",
        },
        Menu: {
			itemSelectedColor: "#FFFFFF",
			itemSelectedBg: "#4880FF",
			activeBarBorderWidth: 0
		},
        Drawer: {
            colorBgContainer: "#1B2431"
        }
	},
};
