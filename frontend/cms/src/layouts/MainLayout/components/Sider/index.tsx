import { SiderProps, theme } from "antd";
import { useSelector } from "react-redux";

import { SiderWrapper } from "./styled";
import { SiderMenu, SiderLogo } from "./components";
import { useActiveBreakpoint } from "../../../../hooks";
import { RootState } from "../../../../configs/store/reducers";

const Sider = () => {
    // Get theme token
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // Screen
    const { isMobileScreen, isTabletScreen } = useActiveBreakpoint();

    // Get state in redux
    const { isSiderCollapse } = useSelector((state: RootState) => state.app);

    // Create Sider props
    const siderProps: SiderProps = {
        trigger: null,
        breakpoint: "lg",
        collapsible: true,
        style: {
            background: colorBgContainer,
        },
        width: isMobileScreen || isTabletScreen ? 0 : 240,
        collapsedWidth: isMobileScreen || isTabletScreen ? 0 : 86,
        collapsed: isMobileScreen || isTabletScreen ? true : isSiderCollapse,
    };

    return (
        <SiderWrapper {...siderProps}>
            <SiderLogo />
            <SiderMenu className="sider__menu" />
        </SiderWrapper>
    );
};

export default Sider;
