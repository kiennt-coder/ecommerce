import { GlobalToken } from "antd";
import styled from "styled-components";

type CardLayoutWapperProps = {
    $token: GlobalToken;
    $bgImage: string;
    style?: React.CSSProperties;
}

const CardLayoutWapper = styled.div<CardLayoutWapperProps>`
    height: 100vh;
    background: ${({$token, $bgImage}) => `center / cover no-repeat url("data:image/svg+xml, ${$bgImage}") ${$token.colorPrimary}` };
    position: relative;
    overflow: hidden auto;

    .ant-card {
        max-width: 630px;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        .ant-card-body {
            padding: 64px 32px;
        }
    }
`

export default CardLayoutWapper;