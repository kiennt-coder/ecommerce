import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { PrivateOutlet } from "./config";
import { ServerError } from "../../pages";
import { MainLayout } from "../../layouts";
import LoginRoute from "../../pages/Login/route";
import RegisterRoute from "../../pages/Register/route";
import ProductsRoute from "../../pages/Products/route";
import NotFoundRoute from "../../pages/NotFound/route";
import DashboardRoute from "../../pages/Dashboard/route";
import VerifyEmailRoute from "../../pages/VerifyEmail/route";
import ServerErrorRoute from "../../pages/ServerError/route";

// Create router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {LoginRoute}
            {RegisterRoute}
            {VerifyEmailRoute}
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
