import { apiPostAsync } from "../../services/axios";
import { AuthLoginProps, AuthRefreshTokenProps, AuthRegisterProps, AuthService, AuthVerifyEmailProps } from "./types";

const AUTH_SERVICE = 'Auth';

const API_AUTH_LOGIN = `/${AUTH_SERVICE}/Login`;
const API_AUTH_REGISTER = `/${AUTH_SERVICE}/Register`;
const API_AUTH_VERIFY_EMAIL = `/${AUTH_SERVICE}/VerifyEmail`;
const API_AUTH_REFRESH_TOKEN = `/${AUTH_SERVICE}/RefreshToken`;

async function authLoginAsync(props: AuthLoginProps) {
    return await apiPostAsync(API_AUTH_LOGIN, props);
}
async function authRegisterAsync(props: AuthRegisterProps) {
    return await apiPostAsync(API_AUTH_REGISTER, props);
}

async function authVerifyEmailAsync(props: AuthVerifyEmailProps) {
    return await apiPostAsync(API_AUTH_VERIFY_EMAIL, null, props);
}

async function authRefreshTokenAsync(props: AuthRefreshTokenProps) {
    return await apiPostAsync(API_AUTH_REFRESH_TOKEN, props);
}


export default {
    authLoginAsync,
    authRegisterAsync,
    authVerifyEmailAsync,
    authRefreshTokenAsync,
} as AuthService