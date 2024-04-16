import { Layout } from "antd";
import styled from "styled-components";

const { Content } = Layout;

interface ContentProps { }

const ContentWrapper = styled(Content) <ContentProps>`
    margin: 24px 24px 0;
    overflow: hidden auto;
`

export default ContentWrapper;