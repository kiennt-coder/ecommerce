import { Spin } from "antd";
import { Suspense } from "react";

type LoadingProps = {
    children: JSX.Element;
    fallback: JSX.Element;
};

const Loading = ({ children, fallback }: LoadingProps) => {
    return <Suspense fallback={fallback}>{children}</Suspense>;
};

export const LoadingSpin = () => {
    return <Spin tip="Loading" size="large" spinning fullscreen />;
};

export default Loading;
