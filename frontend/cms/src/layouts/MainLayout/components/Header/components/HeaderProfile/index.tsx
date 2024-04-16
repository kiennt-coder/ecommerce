import { Avatar, Flex, theme, Typography } from "antd";

import { HeaderProfileWrapper } from "./styled";

const { Text } = Typography;

const HeaderProfile = () => {
    const {
        token: { fontSizeSM },
    } = theme.useToken();

    return (
        <HeaderProfileWrapper>
            <Avatar
                size="large"
                src={
                    <img src="/assets/images/avatar.png" alt="Profile Avatar" />
                }
            />
            <Flex vertical>
                <Text ellipsis strong>Kiennt123</Text>
                <Text style={{ fontSize: fontSizeSM }}>Admin</Text>
            </Flex>
        </HeaderProfileWrapper>
    );
};

export default HeaderProfile;
