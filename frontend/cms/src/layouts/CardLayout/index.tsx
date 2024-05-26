import { Card, theme } from "antd";
import { renderToStaticMarkup } from 'react-dom/server';

import CardLayoutWapper from "./styled";
import { BackgroundShapeImg } from "../../components/images";

type CardLayoutProps = {
    children?: JSX.Element | JSX.Element[]
}

const CardLayout = ({ children }: CardLayoutProps) => {
    const { token } = theme.useToken();

    const BackgroundShageStr = encodeURIComponent(renderToStaticMarkup(<BackgroundShapeImg color={token.colorPrimaryHover} />));

    return <CardLayoutWapper $token={token} $bgImage={BackgroundShageStr}>
        <Card>
            {children}
        </Card>
    </CardLayoutWapper>
}

export default CardLayout;