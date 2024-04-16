import { Flex, Space, theme } from "antd";

import {
    HeaderSearch,
    HeaderProfile,
    HeaderDropdown,
    HeaderToggleSider,
    HeaderSwitchTheme,
    HeaderTranslation,
    HeaderNotification,
} from "./components";
import { HeaderWrapper } from "./styled";
import { useActiveBreakpoint } from "../../../../hooks";

const Header = () => {
    // Get theme tokens
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // Screen
    const { isMobileScreen } = useActiveBreakpoint();

    return (
        <HeaderWrapper style={{ background: colorBgContainer }}>
            <Flex justify="space-between" align="center" gap={24}>
                <Flex justify="flex-start" align="center" gap={24}>
                    <HeaderToggleSider />
                    {!isMobileScreen && <HeaderSearch />}
                </Flex>

                <Space size="large">
                    {!isMobileScreen && (
                        <>
                            <HeaderSwitchTheme />
                            <HeaderNotification />
                            <HeaderTranslation />
                        </>
                    )}
                    <HeaderProfile />
                    <HeaderDropdown />
                </Space>
            </Flex>
        </HeaderWrapper>
    );
};

export default Header;
