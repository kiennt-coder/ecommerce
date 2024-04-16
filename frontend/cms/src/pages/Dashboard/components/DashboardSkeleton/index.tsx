import { Col, Flex, Row, Skeleton } from "antd";

const DashboardSkeleton = () => {
    return (
        <Flex vertical gap={24}>
            <Row>
                <Col span={6}>
                    <Skeleton.Input active block />
                </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Skeleton active paragraph={{ rows: 4 }} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Skeleton active paragraph={{ rows: 4 }} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Skeleton active paragraph={{ rows: 4 }} />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Skeleton active paragraph={{ rows: 4 }} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Skeleton active title={false} paragraph={{ rows: 10 }} />
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Skeleton active title={false} paragraph={{ rows: 10 }} />
                </Col>
            </Row>
        </Flex>
    );
};

export default DashboardSkeleton;
