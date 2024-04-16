import { lazy } from "react";
import { Route } from "react-router-dom";

import ServerError from "../ServerError";
import { Loading } from "../../components";

const LoginPage = lazy(() => import("."))

const routes = (
    <Route path="/dang-nhap">
        <Route
            index
            element={
                <Loading fallback={<>Loading</>}>
                    <LoginPage />
                </Loading>
            }
            errorElement={<ServerError />}
        />
    </Route>
);

export default routes;
