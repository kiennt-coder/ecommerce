import { Button, theme } from "antd";
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";

import { LoginWrapper } from "./styled";

const Login = () => {
    const { token } = theme.useToken()
    return (
        <LoginWrapper style={{ backgroundColor: token.colorBgBase }}>
            <Title>Login Page</Title>
            <Button type="primary">
                <Link to="/">Go to home</Link>
            </Button>
        </LoginWrapper>
    )
}

export default Login;