import { Outlet, Navigate } from "react-router-dom";

// Create Private outlet
const PrivateOutlet = () => {
    const auth = true;

    return auth ? <Outlet /> : <Navigate to="/dang-nhap" />;
};

export { PrivateOutlet };
