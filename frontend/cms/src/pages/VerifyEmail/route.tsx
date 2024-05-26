import { Route } from "react-router-dom";
import { Loading, LoadingSpin } from "../../components";
import { lazy } from "react";

const VerifyEmailPage = lazy(() => import("."));

const routes = (
    <Route path="/xac-thuc-email">
        <Route
            index
            element={
                <Loading fallback={<LoadingSpin />}>
                    <VerifyEmailPage />
                </Loading>
            }
        />
    </Route>
);

export default routes;
