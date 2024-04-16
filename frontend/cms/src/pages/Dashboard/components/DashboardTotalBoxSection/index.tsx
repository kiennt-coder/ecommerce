import { Col, Row } from "antd";
import { geekblue, gold, green, red } from "@ant-design/colors";

import {
    ChartFilled,
    ContainerFilled,
    GroupFilled,
    HistoryFilled,
} from "../../../../components/icons";
import DashboardTotalBoxItem from "../DashboardTotalBoxItem";
import { useTranslation } from "react-i18next";

export enum TotalValueType {
    Number = "Number",
    Price = "Price",
    Float = "Float",
}

type TotalBoxItem = {
    title: string;
    icon: JSX.Element;
    value: number;
    percent: number;
    type: TotalValueType;
    description: string;
    style?: React.CSSProperties;
};

type TranslationBoxItem = {
    title: string;
    description: string;
}

const totalBoxItems: TotalBoxItem[] = [
    {
        title: "Total User",
        icon: <GroupFilled />,
        value: 40689,
        percent: 8.5,
        type: TotalValueType.Number,
        description: "Up from yesterday",
        style: { color: geekblue[4] },
    },
    {
        title: "Total Order",
        icon: <ContainerFilled />,
        value: 10293,
        percent: 1.3,
        type: TotalValueType.Number,
        description: "Up from past week",
        style: { color: gold[4] },
    },
    {
        title: "Total Sales",
        icon: <ChartFilled />,
        value: 89000,
        percent: -4.3,
        type: TotalValueType.Price,
        description: "Down from yesterday",
        style: { color: green[4] },
    },
    {
        title: "Total Pending",
        icon: <HistoryFilled />,
        value: 2040,
        percent: 1.8,
        type: TotalValueType.Number,
        description: "Up from part week",
        style: { color: red[4] },
    },
];

const DashboardTotalBoxSection = () => {
    // i18next
    const { t } = useTranslation(['dashboard'])

    // Get translation box items
    const translationBoxItems: TranslationBoxItem[] = [
        {
            title: t('TotalBox.User.Title'),
            description: t('TotalBox.User.Description', { direction: "Up", day: "yesterday" })
        },
        {
            title: t('TotalBox.Order.Title'),
            description: t('TotalBox.Order.Description', { direction: "Up", day: "past week" })
        },
        {
            title: t('TotalBox.Sales.Title'),
            description: t('TotalBox.Sales.Description', { direction: "Down", day: "yesterday" })
        },
        {
            title: t('TotalBox.Pending.Title'),
            description: t('TotalBox.Pending.Description', { direction: "Up", day: "part week" })
        }
    ]


    // Render total box items
    const renderTotalBoxItems = (totalBoxItems: TotalBoxItem[]) => {
        return totalBoxItems.map((item, index) => {
            return (
                <Col key={index} xs={24} sm={24} md={12} lg={12} xl={6}>
                    <DashboardTotalBoxItem {...item} title={translationBoxItems[index].title} description={translationBoxItems[index].description} />
                </Col>
            );
        });
    };

    return <Row gutter={[24, 24]}>{renderTotalBoxItems(totalBoxItems)}</Row>;
};

export default DashboardTotalBoxSection;
