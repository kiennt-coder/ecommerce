import {
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { GetProps, Menu } from "antd";
import { createElement, memo } from "react";

const items = [
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
    UserOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: createElement(icon),
    label: `nav ${index + 1}`,
}));

type SiderMenuProps = GetProps<typeof Menu>;

const SiderMenu = (props: Partial<SiderMenuProps>) => {
    return (
        <Menu mode="inline" defaultSelectedKeys={["1"]} items={items} {...props} />
    )
}

export default memo(SiderMenu);