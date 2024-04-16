import {
    DownOutlined,
    FilterOutlined,
    ReloadOutlined,
} from "@ant-design/icons";
import { Button, DatePicker, Select, Space } from "antd";

const ProductFilter = () => {
    return (
        <Space.Compact block>
            <Button size="large" icon={<FilterOutlined />} />
            <Button size="large">Filter by</Button>
            <DatePicker size="large" suffixIcon={<DownOutlined />} />
            <Select size="large" options={[]} placeholder="Order type" />
            <Select size="large" options={[]} placeholder="Order status" />
            <Button size="large" danger icon={<ReloadOutlined />}>
                Reset Filter
            </Button>
        </Space.Compact>
    );
};

export default ProductFilter;
