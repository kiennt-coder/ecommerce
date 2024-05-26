import { Link } from "react-router-dom";
import { theme, Typography } from "antd";

import { LoginWrapper } from "./styled";
import { LoginForm } from "./components";
import { CardLayout } from "../../layouts";

const { Title, Text, Paragraph } = Typography;

const Login = () => {
    const { token } = theme.useToken();

    return (
        <LoginWrapper style={{ backgroundColor: token.colorBgBase }}>
            <CardLayout>
                <Title className="login-section__title">Login to Account</Title>

                <Paragraph className="login-section__sub-title">
                    <Text type="secondary">
                        Please enter your email and password to continue
                    </Text>
                </Paragraph>

                <LoginForm />

                <Paragraph className="login-section__suggest">
                    <Text type="secondary">Don't have an account?&nbsp;</Text>
                    <Link to="/dang-ky">Create Account</Link>
                </Paragraph>
            </CardLayout>
        </LoginWrapper>
    );
};

export default Login;
