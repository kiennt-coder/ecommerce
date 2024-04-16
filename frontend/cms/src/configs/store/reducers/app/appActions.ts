import { appActions } from "./appSlice";
import { AppDispatch, AppThunk } from "../..";

// Sider Collapse actions
export const toggleSiderCollapse = (): AppThunk => {
	return (dispatch: AppDispatch) => {
		dispatch(appActions.toggleSiderCollapseRequest());

		return new Promise<string|void>((resolve, reject) => {
			try {
				dispatch(appActions.toggleSiderCollapseFulfilled());
				resolve();
			} catch (error: any) {
				dispatch(appActions.toggleSiderCollapseRejected());
				reject(error.message);
			}
		});
	};
};
