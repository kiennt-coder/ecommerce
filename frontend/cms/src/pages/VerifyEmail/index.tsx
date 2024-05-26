import { useCallback, useEffect } from "react";
import { Modal, Typography } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";

import VerifyEmailWrapper from "./styled";
import { CardLayout } from "../../layouts";
import { loginPath } from "../Login/route";
import { apiAuthSvc } from "../../configs/api";
import { ApiResponseBase, AuthVerifyEmailProps } from "../../configs/api/types";

const { Title, Text } = Typography;

const VerifyEmail = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [modal, contextHolder] = Modal.useModal();

    const verifyEmailAsync = useCallback(async (payload: AuthVerifyEmailProps) => {
        const response: ApiResponseBase = await apiAuthSvc.authVerifyEmailAsync(payload);

        if (response.status >= 400) {
            modal.error({
                title: "Xác thực email",
                content: response.message,
            })
        } else {
            modal.success({
                title: "Xác thực email",
                content: "Xác thực email thành công, vui lòng đăng nhập để tiếp tục",
                onOk: () => {
                    navigate(loginPath.index)
                }
            })
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        const registerId = searchParams.get("registerId")

        if (registerId) {
            // verify email
            verifyEmailAsync({ registerId })
        } else {
            // redirect to not found page
            navigate('/not-found')
        }

        return () => {
            Modal.destroyAll()
        }

        // eslint-disable-next-line
    }, [searchParams.size]);

    return (
        <VerifyEmailWrapper>
            <CardLayout>
                <Title className="verify-email-section__title">
                    Xác thực email
                </Title>
                <Text>
                    Đang tiến hành xác thực email, vui lòng đợi trong giây lát...
                </Text>
            </CardLayout>
            {contextHolder}
        </VerifyEmailWrapper>
    );
};

export default VerifyEmail;
