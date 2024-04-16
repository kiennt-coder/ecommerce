import { Layout } from "antd";
import styled from "styled-components";

interface LayoutProps { }

const LayoutWrapper = styled(Layout) <LayoutProps>`
    height: 100vh;
    overflow: hidden;
`;

export default LayoutWrapper;
