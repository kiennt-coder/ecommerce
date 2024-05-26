import { useDispatch, useSelector } from "react-redux";
import { Checkbox, Form, FormProps, Input, Modal } from "antd";

import RegisterFormWrapper from "./styled";
import { formRule } from "../../../../common";
import { Button } from "../../../../components";
import fomRules from "../../../../common/fomRules";
import { AppDispatch } from "../../../../configs/store";
import { RootState } from "../../../../configs/store/reducers";
import { ApiResponseBase } from "../../../../configs/api/types";
import { ButtonWidth } from "../../../../components/Button/types";
import { RegisterFormField } from "../../../../common/types/form";
import { registerAccount } from "../../../../configs/store/reducers/profile/profileActions";

const RegisterForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const profileState = useSelector((state: RootState) => state.profile);
    const [modal, contextHolder] = Modal.useModal();

    const handleSubmit: FormProps["onFinish"] = async (values: RegisterFormField) => {
        const response: ApiResponseBase = await dispatch(registerAccount(values));

        if (response.status >= 400) {
            modal.error({
                title: "RegisterAccount",
                content: response.message,
            })
        } else {
            modal.success({
                title: "RegisterAccount",
                content: response.message,
            })
        }
    };

    return (
        <RegisterFormWrapper
            onFinish={handleSubmit}
            name="register-form"
            layout="vertical"
        >
            <Form.Item<RegisterFormField>
                label="Email"
                name="email"
                rules={[formRule.EMAIL, formRule.REQUIRED]}
                validateFirst={true}
            >
                <Input placeholder="example@gmail.com" size="large" />
            </Form.Item>

            <Form.Item<RegisterFormField>
                label="Username"
                name="username"
                rules={[fomRules.USERNAME, formRule.MIN(3), formRule.MAX(18)]}
                validateFirst={true}
                tooltip={{
                    title: "Username should be at least 3-18 characters long and use a combination of letters, numbers, and underscores.",
                    overlayInnerStyle: {
                        width: 400,
                    },
                }}
            >
                <Input placeholder="example" size="large" />
            </Form.Item>

            <Form.Item<RegisterFormField>
                className="login-form__item--password"
                label="Password"
                name="password"
                rules={[formRule.REQUIRED, formRule.PASSWORD]}
                validateFirst={true}
                tooltip={{
                    title: "Password should be at least 8-128 characters long and use a combination of uppercase letters, lowercase letters, numbers, and special characters.",
                    overlayInnerStyle: {
                        width: 400,
                    },
                }}
            >
                <Input.Password
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                    size="large"
                />
            </Form.Item>

            <Form.Item<RegisterFormField>
                name="acceptTerm"
                valuePropName="checked"
                rules={[formRule.ACCCEPT_TERM]}
                validateFirst={true}
            >
                <Checkbox>I accept terms and conditions</Checkbox>
            </Form.Item>

            <Form.Item className="login-form__item--submit">
                <Button
                    width={ButtonWidth.Large}
                    size="large"
                    type="primary"
                    htmlType="submit"
                    loading={profileState.loading}
                >
                    Sign Up
                </Button>
            </Form.Item>
            {contextHolder}
        </RegisterFormWrapper>
    );
};

export default RegisterForm;
