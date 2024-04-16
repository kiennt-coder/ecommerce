import { memo } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import LayoutWrapper from "./styled";
import { useActiveBreakpoint } from "../../hooks";
import { Content, Footer, Header, Sider, SiderDrawer } from "./components";

const MainLayout = () => {
    // Check current screen to response
    const { isMobileScreen, isTabletScreen } = useActiveBreakpoint();

    return (
        <LayoutWrapper>
            {isMobileScreen || isTabletScreen ? <SiderDrawer /> : <Sider />}
            <Layout>
                <Header />
                <Content>
                    <Outlet />
                </Content>
                <Footer />
            </Layout>
        </LayoutWrapper>
    );
};

export default memo(MainLayout);
