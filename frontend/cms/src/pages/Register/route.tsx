import { lazy } from "react";
import { Route } from "react-router-dom";

import { Loading, LoadingSpin } from "../../components";

const RegisterPage = lazy(() => import("."));

const routes = (
    <Route path="/dang-ky">
        <Route
            index
            element={
                <Loading fallback={<LoadingSpin />}>
                    <RegisterPage />
                </Loading>
            }
        />
    </Route>
);

export default routes;
