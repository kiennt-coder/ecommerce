import { Form } from "antd";
import styled from "styled-components";

const LoginFormWrapper = styled(Form)`
	.login-form__item--password label {
		display: flex;

        &::after {
            display: none;
        }
	}

	.login-form__item--password {
		.login-form__label-wrapper {
			flex-grow: 1;
		}
	}

	.login-form__item--submit {
		text-align: center;
	}
`;

export default LoginFormWrapper;
