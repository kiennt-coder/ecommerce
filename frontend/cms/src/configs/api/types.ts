export interface AuthService {
    authLoginAsync: (props: AuthLoginProps) => Promise<any>;
    authRegisterAsync: (props: AuthRegisterProps) => Promise<any>;
    authVerifyEmailAsync: (props: AuthVerifyEmailProps) => Promise<any>;
    authRefreshTokenAsync: (props: AuthRefreshTokenProps) => Promise<any>;
}

export type ConfigApi = {
    API_BASE_URL: string;
}

export type AuthLoginProps = {
    email: string;
    password: string;
}

export type AuthRegisterProps = {
    email: string;
    username?: string;
    password: string;
}

export type AuthVerifyEmailProps = {
    registerId: string;
}

export type AuthRefreshTokenProps = {
    token: string;
    refreshToken: string;
}

export type ApiResponseBase<D = any> = {
    status: number;
    message?: string | null;
    data: D | null;
}