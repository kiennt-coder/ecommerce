import instance, {
    apiGetAsync,
	apiPutAsync,
	apiPostAsync,
	apiPatchAsync,
	apiDeleteAsync,
} from ".";
import type { HeaderType } from ".";

instance.interceptors.request.use(
	function (configs) {
		return configs;
	},
	function (error) {
		return Promise.reject(error);
	}
);

const headerConfigs = function (headers: HeaderType = {}): HeaderType {

	if(!headers) headers = {};

	const token = "Bearer";

	return {
		...headers,
		Authorization: token,
	} as HeaderType;
};

export const apiGetAuthAsync = async (
	url: string,
	data?: any,
	params?: any,
	headers?: HeaderType
) => {
	const _headers = headerConfigs(headers);
	return await apiGetAsync(url, data, params, _headers);
};

export const apiPostAuthAsync = async (
	url: string,
	data?: any,
	params?: any,
	headers?: HeaderType
) => {
	const _headers = headerConfigs(headers);
	return await apiPostAsync(url, data, params, _headers);
};

export const apiPutAuthAsync = async (
	url: string,
	data?: any,
	params?: any,
	headers?: HeaderType
) => {
	const _headers = headerConfigs(headers);
	return await apiPutAsync(url, data, params, _headers);
};

export const apiPatchAuthAsync = async (
	url: string,
	data?: any,
	params?: any,
	headers?: HeaderType
) => {
	const _headers = headerConfigs(headers);
	return await apiPatchAsync(url, data, params, _headers);
};

export const apiDeleteAuthAsync = async (
	url: string,
	data?: any,
	params?: any,
	headers?: HeaderType
) => {
	const _headers = headerConfigs(headers);
	return await apiDeleteAsync(url, data, params, _headers);
};
