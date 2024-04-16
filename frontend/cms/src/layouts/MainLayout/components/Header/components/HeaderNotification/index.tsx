import { Badge, theme, Tooltip } from "antd";

import { HeaderNotificationWrapper } from "./styled";
import { BellFilled } from "../../../../../../components/icons";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

const HeaderNotification = () => {
    // Theme
    const {
        token: { fontSizeXL },
    } = theme.useToken();

    // I18next
    const { t } = useTranslation(["common"])

    // Ref
    const bellFilledRef = useRef(null)

    // Get title tooltip
    const titleTooltip = t("Header.Notification");

    return (
        <HeaderNotificationWrapper>
            <Badge count={5} size="small">
                <Tooltip title={titleTooltip}>
                    <BellFilled
                        style={{ fontSize: fontSizeXL, verticalAlign: "middle" }}
                        ref={bellFilledRef}
                    />
                </Tooltip>
            </Badge>
        </HeaderNotificationWrapper>
    );
};

export default HeaderNotification;
