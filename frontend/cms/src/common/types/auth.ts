export type Auth = {
    token: string;
    tokenExpired: number;
    refreshToken: string;
    refreshTokenExpired: number;
}