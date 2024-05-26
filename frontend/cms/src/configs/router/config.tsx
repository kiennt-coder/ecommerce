import { Outlet, Navigate } from "react-router-dom";

import { loginPath } from "../../pages/Login/route";
import useVerifyToken from "../../hooks/useVerifyToken";

// Create Private outlet
const PrivateOutlet = () => {
    const [tokenValid] = useVerifyToken();

    return tokenValid ? <Outlet /> : <Navigate to={loginPath.index} />;
};

export { PrivateOutlet };
