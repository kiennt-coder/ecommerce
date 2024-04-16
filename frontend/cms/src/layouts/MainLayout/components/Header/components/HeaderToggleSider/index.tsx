import { useDispatch } from "react-redux";

import { HeaderToggleSiderWrapper } from "./styled";
import { AppDispatch } from "../../../../../../configs/store";
import { toggleSiderCollapse } from "../../../../../../configs/store/reducers/app/appActions";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

const HeaderToggleSider = () => {
    // Dispatch
    const dispatch = useDispatch<AppDispatch>();

    // I18next
    const { t } = useTranslation(["common"])

    // Handle icon menu click
    const handleIconMenuClick = (event: React.SyntheticEvent) => {
        dispatch(toggleSiderCollapse());
    };

    // Get title tooltip
    const titleTooltip = t("Header.Menu")

    return (
        <Tooltip title={titleTooltip}>
            <HeaderToggleSiderWrapper
                className="header-left__menu-icon"
                onClick={handleIconMenuClick}
            />
        </Tooltip>
    );
};

export default HeaderToggleSider;
