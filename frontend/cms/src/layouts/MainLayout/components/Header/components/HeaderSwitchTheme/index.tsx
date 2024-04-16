import { useTranslation } from "react-i18next";
import { theme as themeAntd, Tooltip } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

import { HeaderSwitchThemeWrapper } from "./styled";
import { AppDispatch } from "../../../../../../configs/store";
import { RootState } from "../../../../../../configs/store/reducers";
import { Theme } from "../../../../../../configs/store/reducers/config/configTypes";
import { setTheme } from "../../../../../../configs/store/reducers/config/configActions";

const HeaderSwitchTheme = () => {
    // Theme
    const {
        token: { fontSizeXL },
    } = themeAntd.useToken();

    // Dispatch
    const dispatch = useDispatch<AppDispatch>();

    // State
    const configs = useSelector((state: RootState) => state.configs);

    // I18next
    const { t } = useTranslation(["common"])

    // Change theme
    const switchTheme = (theme: Theme) => {
        if (configs.theme !== theme && !configs.loading)
            dispatch(setTheme(theme));
    };

    // Hanlde icon click
    const handleSwitchThemeIconClick = () => {
        const theme = configs.theme === Theme.Dark ? Theme.Default : Theme.Dark;
        switchTheme(theme);
    };

    // Check current theme and get icon theme
    const iconTheme: React.ForwardRefExoticComponent<any> =
        configs.theme === Theme.Dark ? MoonOutlined : SunOutlined;

    // Check current theme and get title tooltip
    const titleTooltip = configs.theme === Theme.Dark ? "Header.Theme.Dark" : "Header.Theme.Light";

    return (
        <Tooltip title={t(titleTooltip)}>
            <HeaderSwitchThemeWrapper
                component={iconTheme}
                style={{ fontSize: fontSizeXL }}
                onClick={handleSwitchThemeIconClick}
            />
        </Tooltip>
    );
};

export default HeaderSwitchTheme;
