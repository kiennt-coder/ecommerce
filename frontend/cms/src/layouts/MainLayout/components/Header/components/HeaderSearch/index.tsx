import { theme } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { HeaderSearchWrapper } from "./styled";

const HeaderSearch = () => {
    const {
        token: { colorTextDescription },
    } = theme.useToken();

    return (
        <HeaderSearchWrapper
            prefix={<SearchOutlined style={{ color: colorTextDescription }} />}
            placeholder="Search"
        />
    );
};

export default HeaderSearch;
