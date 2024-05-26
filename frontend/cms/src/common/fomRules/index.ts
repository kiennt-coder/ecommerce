import { Rule } from "antd/es/form";

export default Object.freeze({
	REQUIRED: {
		required: true,
		// eslint-disable-next-line
		message: "${label} is required!",
	} as Rule,
	EMAIL: {
		type: "email",
		whitespace: true,
		// eslint-disable-next-line
		message: "${label} is not a valid!",
	} as Rule,
    // Username: Only letters, numbers, and underscores are allowed
	USERNAME: {
		pattern: /^([\w\s]+)$/gm,
		whitespace: false,
		// eslint-disable-next-line
		message: "${label} is not a valid!",
	} as Rule,
    // Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
	PASSWORD: {
		pattern:
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/gm,
		whitespace: true,
		// eslint-disable-next-line
		message: "${label} is not a valid!",
	} as Rule,
	ACCCEPT_TERM: {
		validator: (_, value) =>
			value
				? Promise.resolve()
				: // eslint-disable-next-line
				  Promise.reject("Accept terms and conditions!"),
	} as Rule,
	MIN: (number: number): Rule => ({
		min: number,
		// eslint-disable-next-line
		message: "${label} must be at least ${min} characters!",
	}),
	MAX: (number: number): Rule => ({
		max: number,
		// eslint-disable-next-line
		message: "${label} must be at most ${max} characters!",
	}),
});
