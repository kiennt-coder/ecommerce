import { useState } from "react";
import { DropdownProps, MenuProps, theme } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";

import { HeaderDropdownWrapper } from "./styled";
import { Link } from "react-router-dom";

type DropdownOpenChange = DropdownProps["onOpenChange"];

const items: MenuProps["items"] = [
    {
        label: "Profile",
        key: "0",
    },
    {
        label: "Settings",
        key: "1",
    },
    {
        type: "divider",
    },
    {
        label: <Link to="/dang-nhap">Logout</Link>,
        key: "2",
    },
];

const HeaderDropdown = () => {
    const {
        token: { fontSizeXL, colorTextBase, colorTextDescription },
    } = theme.useToken();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownOpenChange: DropdownOpenChange = (open, info) => {
        setIsDropdownOpen(open);
    };

    return (
        <HeaderDropdownWrapper
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
            autoAdjustOverflow
            destroyPopupOnHide
            overlayStyle={{ width: 200 }}
            onOpenChange={handleDropdownOpenChange}
            isDropdownOpen={isDropdownOpen}
        >
            <a
                href="/"
                onClick={(e) => e.preventDefault()}
                className="header-dropdown__link"
                style={{ color: colorTextBase }}
            >
                <DownCircleOutlined
                    className="header-dropdown__icon"
                    style={{
                        fontSize: fontSizeXL,
                        color: colorTextDescription,
                    }}
                />
            </a>
        </HeaderDropdownWrapper>
    );
};

export default HeaderDropdown;
