import { Profile } from "./profileTypes";
import { apiAuthSvc } from "../../../api";
import { AppDispatch, AppThunk } from "../..";
import { profileActions } from "./profileSlice";
import { LoginFormField, RegisterFormField } from "../../../../common/types/form";
import { ApiResponseBase, AuthRegisterProps } from "../../../api/types";

// Sider Collapse actions
export const registerAccount = (payload: RegisterFormField): AppThunk => {
	return (dispatch: AppDispatch) => {
		dispatch(profileActions.registerAccountRequest());

		return new Promise<string|ApiResponseBase|void>(async (resolve, reject) => {
			try {
				const authRegisterProps: AuthRegisterProps = {
					email: payload.email,
                    username: payload.username,
                    password:  payload.password,
				}

				const response: ApiResponseBase = await apiAuthSvc.authRegisterAsync(authRegisterProps);

				if(response.status >= 400) {
					dispatch(profileActions.registerAccountRejected());
				}else {
					dispatch(profileActions.registerAccountFulfilled());
				}
				resolve(response);

			} catch (error: any) {
				dispatch(profileActions.registerAccountRejected());
				reject(error.message);
			}
		});
	};
};

export const loginAccount = (payload: LoginFormField): AppThunk => {
	return (dispatch: AppDispatch) => {
        dispatch(profileActions.loginAccountRequest());

        return new Promise<string|ApiResponseBase|void>(async (resolve, reject) => {
            try {
				const authLoginProps: AuthRegisterProps = {
                    email: payload.email,
                    password:  payload.password,
                }
                const response: ApiResponseBase<Profile> = await apiAuthSvc.authLoginAsync(authLoginProps);

				
				if(response.status >= 400) {
					dispatch(profileActions.loginAccountRejected());
				}else {
					let profile: Profile = response.data ?? {};

					localStorage.setItem('profile', JSON.stringify(profile));

					dispatch(profileActions.loginAccountFulfilled(profile));
				}

                resolve(response);
            } catch (error: any) {
                dispatch(profileActions.loginAccountRejected());
                reject(error.message);
            }
        });
    };
}
