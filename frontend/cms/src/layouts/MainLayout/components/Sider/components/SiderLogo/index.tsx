import { theme, Typography } from "antd";
import { useSelector } from "react-redux";

import { SiderLogoWrapper } from "./styled";
import { LogoFilled } from "../../../../../../components/icons";
import { RootState } from "../../../../../../configs/store/reducers";

const { Text } = Typography;

const SiderLogo = () => {
    const {
        token: { colorText, colorPrimary, fontSizeHeading2, fontWeightStrong },
    } = theme.useToken();

    // Get state in redux
    const { isSiderCollapse } = useSelector((state: RootState) => state.app);

    const textStyle: React.CSSProperties = {
        fontSize: fontSizeHeading2,
        fontWeight: fontWeightStrong,
    };

    return (
        <SiderLogoWrapper
            align="center"
            justify="center"
            className="sider__logo-wrapper"
        >
            {isSiderCollapse ? (
                <>
                    <Text
                        style={{
                            ...textStyle,
                            color: colorPrimary,
                        }}
                    >
                        D
                    </Text>
                    <Text
                        style={{
                            ...textStyle,
                            color: colorText,
                        }}
                    >
                        S
                    </Text>
                </>
            ) : (
                <LogoFilled
                    className="sider__logo"
                    style={{ color: colorText }}
                />
            )}
        </SiderLogoWrapper>
    );
};

export default SiderLogo;
