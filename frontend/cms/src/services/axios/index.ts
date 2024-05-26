import axios, {
	AxiosError,
	AxiosRequestConfig,
	Method,
	ResponseType,
} from "axios";

import apiConfig from "../../configs/api/config";
import { ApiResponseBase } from "../../configs/api/types";

const instance = axios.create({
	baseURL: apiConfig.API_BASE_URL,
	withCredentials: true,
});

// Hanle request
instance.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

// Handle response
instance.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export type HeaderType = AxiosRequestConfig<any>["headers"];

type CallApiProps = {
	url: string;
	headers?: HeaderType;
	method: Method;
	data?: any;
	params?: any;
	responseType: ResponseType;
};

const callApiAsync = function ({
	url,
	headers = {},
	method = "GET",
	data = null,
	params = null,
	responseType = "json",
}: CallApiProps) {
	if (!headers) headers = {};

	headers = {
		Accept: "application/json",
		"Content-Type": "application/json",
		...headers,
	};

	if (data instanceof FormData) {
		headers["Content-Type"] = "multipart/form-data";
	}

	return instance({
		url,
		method,
		data,
		params,
		headers,
		responseType,
	})
		.then(function (response: any): ApiResponseBase {
			return response.data;
		})
		.catch(function (error: AxiosError<unknown, ApiResponseBase>) {
			return error.response?.data;
		});
};

export const apiGetAsync = async (
	url: string,
	data?: any,
	params?: any,
	headers?: HeaderType
) => {
	const props: CallApiProps = {
		url,
		data,
		params,
		headers,
		method: "GET",
		responseType: "json",
	};
	return await callApiAsync(props);
};

export const apiPostAsync = async (
	url: string,
	data?: any,
	params?: any,
	headers?: HeaderType
) => {
	const props: CallApiProps = {
		url,
		data,
		params,
		headers,
		method: "POST",
		responseType: "json",
	};
	return await callApiAsync(props);
};

export const apiPutAsync = async (
	url: string,
	data?: any,
	params?: any,
	headers?: HeaderType
) => {
	const props: CallApiProps = {
		url,
		data,
		params,
		headers,
		method: "PUT",
		responseType: "json",
	};
	return await callApiAsync(props);
};

export const apiPatchAsync = async (
	url: string,
	data?: any,
	params?: any,
	headers?: HeaderType
) => {
	const props: CallApiProps = {
		url,
		data,
		params,
		headers,
		method: "PATCH",
		responseType: "json",
	};
	return await callApiAsync(props);
};

export const apiDeleteAsync = async (
	url: string,
	data?: any,
	params?: any,
	headers?: HeaderType
) => {
	const props: CallApiProps = {
		url,
		data,
		params,
		headers,
		method: "DELETE",
		responseType: "json",
	};
	return await callApiAsync(props);
};

export default instance;
