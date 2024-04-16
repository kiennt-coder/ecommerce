import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { PrivateOutlet } from "./config";
import { ServerError } from "../../pages";
import { MainLayout } from "../../layouts";
import LoginRoute from "../../pages/Login/route";
import NotFoundRoute from "../../pages/NotFound/route";
import DashboardRoute from "../../pages/Dashboard/route";
import ServerErrorRoute from "../../pages/ServerError/route";
import ProductsRoute from "../../pages/Products/route";

// Create router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {LoginRoute}
            {NotFoundRoute}
            {ServerErrorRoute}
            <Route element={<PrivateOutlet />}>
                <Route element={<MainLayout />} errorElement={<ServerError />}>
                    {DashboardRoute}
                    {ProductsRoute}
                </Route>
            </Route>
        </Route>
    )
);

export default router;
