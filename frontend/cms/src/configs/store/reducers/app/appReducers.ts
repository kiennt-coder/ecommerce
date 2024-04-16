import { PayloadAction } from "@reduxjs/toolkit";

// Sider Collapse reducers
export const toggleSiderCollapseRequest = (state: any, action: PayloadAction) => {
	state.loading = true;
};

export const toggleSiderCollapseFulfilled = (state: any, action: PayloadAction) => {
	state.isSiderCollapse = !state.isSiderCollapse;
	state.loading = false;
};

export const toggleSiderCollapseRejected = (state: any, action: PayloadAction) => {
	state.loading = false;
};
