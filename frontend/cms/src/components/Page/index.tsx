import { Typography } from "antd";
import { PageWrapper } from "./styled";

const { Title } = Typography;

type PageProps = {
    title: string;
    children: React.ReactNode;
}

const Page = ({ title, children }: PageProps) => {
    return (
        <PageWrapper vertical>
            <Title level={2}>
                {title}
            </Title>

            {children}
        </PageWrapper>
    )
}

export default Page;