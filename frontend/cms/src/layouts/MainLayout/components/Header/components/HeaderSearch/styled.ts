import { Input } from "antd";
import styled from "styled-components";

export const HeaderSearchWrapper = styled(Input)`
    width: 388px;

    @media screen and (min-width: 992px) and (max-width:1199.999px) {
        width: 288px;
    }

    @media screen and (min-width: 768px) and (max-width: 991.999px) {
        width: 188px;
    }

    @media screen and (min-width: 576px) and (max-width: 767.999px) {
        width: 188px;
    }

    @media screen and (max-width: 575.999px) {
        display: none;
    }
`;
