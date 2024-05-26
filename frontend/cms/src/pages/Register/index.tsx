import { Typography } from "antd";
import { CardLayout } from "../../layouts";
import RegisterWrapper from "./styled";
import { Link } from "react-router-dom";
import { RegisterForm } from "./components";
import { loginPath } from "../Login/route";

const { Title, Text, Paragraph } = Typography;

const Register = () => {
    return (
        <RegisterWrapper>
            <CardLayout>
                <Title className="register-section__title">Create An Account</Title>

                <Paragraph className="register-section__sub-title">
                    <Text type="secondary">Create a account to continue</Text>
                </Paragraph>

                <RegisterForm />

                <Paragraph className="register-section__suggest">
                    <Text type="secondary">Already have an account?&nbsp;</Text>
                    <Link to={loginPath.index}>Login</Link>
                </Paragraph>
            </CardLayout>
        </RegisterWrapper>
    )
}

export default Register;