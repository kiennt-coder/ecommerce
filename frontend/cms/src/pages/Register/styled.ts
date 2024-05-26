import styled from "styled-components";

const RegisterWrapper = styled.div`
	height: 100vh;

	.register-section__title,
	.register-section__sub-title {
		text-align: center;
	}

	.register-section__title {
		font-size: 1.5rem;
	}

	.register-section__suggest {
		text-align: center;
		margin-bottom: 0;

		a {
			text-decoration: underline;
		}
	}
`;

export default RegisterWrapper;
