import CountUp from "react-countup";
import { green, red } from "@ant-design/colors";
import { FallOutlined, RiseOutlined } from "@ant-design/icons";
import { Flex, GetProps, Statistic, Typography } from "antd";

import { DashboardTotalBoxItemWapper } from "./styled";
import { TotalValueType } from "../DashboardTotalBoxSection";

const { Text } = Typography;

// Dashboard total box item props type
type DashboardTotalBoxItemProps = {
    title: string;
    value: number;
    type: TotalValueType;
    percent: number;
    icon: JSX.Element;
    description: string;
    style?: React.CSSProperties;
};

// Description props type
type DescriptionProps = GetProps<typeof Statistic> & {
    type: TotalValueType;
};

// handle number count up
const formatter = (value: number, type?: TotalValueType) => (
    <CountUp
        start={0}
        end={value}
        separator=","
        prefix={type === TotalValueType.Price ? "$" : ""}
        decimals={type === TotalValueType.Float ? 1 : 0}
    />
);

// Dashboard total box item component
const DashboardTotalBoxItem = ({
    title,
    icon,
    value,
    type,
    percent,
    description,
    ...rest
}: DashboardTotalBoxItemProps) => {
    // Check percent is increase or decrease
    const isPercentIncrease = percent >= 0;

    // Description props
    const descriptionProps: DescriptionProps = {
        suffix: "%",
        precision: 1,
        type: TotalValueType.Float,
        value: Math.abs(percent),
        className: "dashboard-total-box__percent",
        valueStyle: {
            color: isPercentIncrease ? green[6] : red[6],
        },
        prefix: isPercentIncrease ? <RiseOutlined /> : <FallOutlined />,
        formatter: () => formatter(Math.abs(percent), TotalValueType.Float),
    };

    return (
        <DashboardTotalBoxItemWapper {...rest}>
            <Flex align="flex-start">
                <Flex vertical className="dashboard-total-box__content">
                    <Statistic
                        title={title}
                        value={value}
                        formatter={() => formatter(value, type)}
                    />
                </Flex>
                <Flex
                    align="center"
                    justify="center"
                    className="dashboard-total-box__icon"
                >
                    {icon}
                </Flex>
            </Flex>
            <Flex
                gap={6}
                align="center"
                justify="flex-start"
                className="dashboard-total-box__description"
            >
                <Statistic {...descriptionProps} />
                <Text
                    ellipsis={{
                        tooltip: description,
                    }}
                >
                    {description}
                </Text>
            </Flex>
        </DashboardTotalBoxItemWapper>
    );
};

export default DashboardTotalBoxItem;
