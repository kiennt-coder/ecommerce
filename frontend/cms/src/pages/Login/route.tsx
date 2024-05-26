import { lazy } from "react";
import { Route } from "react-router-dom";

import ServerError from "../ServerError";
import { Loading, LoadingSpin } from "../../components";

const LoginPage = lazy(() => import("."))

interface LoginPath {
    index: string;
}

export const loginPath: LoginPath = {
    index: "/dang-nhap",
}

const routes = (
    <Route path={loginPath.index}>
        <Route
            index
            element={
                <Loading fallback={<LoadingSpin />}>
                    <LoginPage />
                </Loading>
            }
            errorElement={<ServerError />}
        />
    </Route>
);

export default routes;
