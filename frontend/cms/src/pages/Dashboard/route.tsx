import { lazy } from "react";
import { Route } from "react-router-dom";

import { ServerError } from "..";
import { Loading } from "../../components";
import { DashboardSkeleton } from "./components";

const DashboardPage = lazy(() => import("."));

const routes = (
    <>
        <Route
            index
            element={
                <Loading fallback={<DashboardSkeleton />}>
                    <DashboardPage />
                </Loading>
            }
            errorElement={<ServerError />}
        />
    </>
);

export default routes;
