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
