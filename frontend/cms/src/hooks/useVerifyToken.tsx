import { getState } from "../configs/store";
import { Profile } from "../configs/store/reducers/profile/profileTypes";

const useVerifyToken = () => {
    let tokenValid = false;
    const { auth } = getState.profile;
    const profile = JSON.parse(
        localStorage.getItem("profile") ?? "{}"
    ) as Profile;

    const isTokenValid = (
        currentTime: number,
        expiredTime?: number | null
    ): boolean => (!expiredTime ? false : currentTime < expiredTime);

    if (
        (auth?.token &&
            isTokenValid(new Date().getTime(), auth.tokenExpired)) ||
        (profile.auth?.token &&
            isTokenValid(new Date().getTime(), profile.auth.tokenExpired))
    ) {
        tokenValid = true;
    }

    return [tokenValid];
};

export default useVerifyToken;
