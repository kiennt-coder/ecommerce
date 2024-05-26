import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    Checkbox,
    Flex,
    Form,
    FormProps,
    Input,
    Modal,
    Typography,
} from "antd";

import LoginFormWrapper from "./styled";
import { formRule } from "../../../../common";
import { Button } from "../../../../components";
import { AppDispatch } from "../../../../configs/store";
import { LoginFormField } from "../../../../common/types/form";
import { ButtonWidth } from "../../../../components/Button/types";
import { loginAccount } from "../../../../configs/store/reducers/profile/profileActions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../configs/store/reducers";

const { Text } = Typography;

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const profileState = useSelector((state: RootState) => state.profile);

    const [modal, contextHolder] = Modal.useModal();

    const handleSubmit: FormProps["onFinish"] = async (
        values: LoginFormField
    ) => {
        const response = await dispatch(loginAccount(values));

        if (response.status >= 400) {
            modal.error({
                title: "Đăng nhập",
                content: response.message,
            });
        } else {
            navigate("/");
        }
    };

    return (
        <LoginFormWrapper
            onFinish={handleSubmit}
            name="login-form"
            layout="vertical"
        >
            <Form.Item<LoginFormField>
                label="Email"
                name="email"
                rules={[formRule.EMAIL]}
            >
                <Input placeholder="example@gmail.com" size="large" autoComplete="email" />
            </Form.Item>

            <Form.Item<LoginFormField>
                className="login-form__item--password"
                label={
                    <Flex
                        className="login-form__label-wrapper"
                        align="center"
                        justify="space-between"
                    >
                        <Text>Password</Text>
                        <Link to={"/quen-mat-khau"}>Forget Password?</Link>
                    </Flex>
                }
                name="password"
            >
                <Input.Password
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    size="large"
                    autoComplete="current-password"
                />
            </Form.Item>

            <Form.Item<LoginFormField> name="remember" valuePropName="checked">
                <Checkbox>Remember Password</Checkbox>
            </Form.Item>

            <Form.Item<LoginFormField> className="login-form__item--submit">
                <Button
                    width={ButtonWidth.Large}
                    size="large"
                    type="primary"
                    htmlType="submit"
                    loading={profileState.loading}
                >
                    Sign In
                </Button>
            </Form.Item>
            {contextHolder}
        </LoginFormWrapper>
    );
};

export default LoginForm;
