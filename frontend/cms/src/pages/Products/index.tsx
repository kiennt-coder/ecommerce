import { Flex, PaginationProps, TableProps, theme } from "antd";

import { ProductFilter } from "./components";
import { Page, Table } from "../../components";

enum ProductType {
    Electric = "Electric",
    Book = "Book",
    Medicine = "Medicine",
    Mobile = "Mobile",
    Watch = "Watch",
}

enum ProductStatus {
    OnHold = "On Hold",
    Rejected = "Rejected",
    InTransit = "In Transit",
    Completed = "Completed",
    Processing = "Processing",
}

type DataType = {
    key: string;
    id: string;
    name: string;
    address: string;
    date: string;
    type: ProductType;
    status: ProductStatus;
}

const dataScource = [
    {
        key: "1",
        id: "00001",
        name: "Christine Brooks",
        address: "089 Kutch Green Apt. 448",
        date: "14 Feb 2019",
        type: ProductType.Electric,
        status: ProductStatus.Completed,
    },
    {
        key: "2",
        id: "00002",
        name: "Rosie Pearson",
        address: "979 Immanuel Ferry Suite 526",
        date: "14 Feb 2019",
        type: ProductType.Book,
        status: ProductStatus.Processing,
    },
    {
        key: "3",
        id: "00003",
        name: "Darrell Caldwell",
        address: "8587 Frida Ports",
        date: "14 Feb 2019",
        type: ProductType.Medicine,
        status: ProductStatus.Rejected,
    },
    {
        key: "4",
        id: "00004",
        name: "Gilbert Johnston",
        address: "768 Destiny Lake Suite 600",
        date: "14 Feb 2019",
        type: ProductType.Mobile,
        status: ProductStatus.Completed,
    },
    {
        key: "5",
        id: "00005",
        name: "Alan Cain",
        address: "042 Mylene Throughway",
        date: "14 Feb 2019",
        type: ProductType.Watch,
        status: ProductStatus.Processing,
    },
    {
        key: "6",
        id: "00006",
        name: "Alfred Murray",
        address: "543 Weimann Mountain",
        date: "14 Feb 2019",
        type: ProductType.Medicine,
        status: ProductStatus.OnHold,
    },
    {
        key: "7",
        id: "00007",
        name: "Dollie Hines",
        address: "124 Lyla Forge Suite 975",
        date: "14 Feb 2019",
        type: ProductType.Mobile,
        status: ProductStatus.InTransit,
    },
    {
        key: "8",
        id: "00008",
        name: "Rosie Todd",
        address: "New Jon",
        date: "30 Apr 2019",
        type: ProductType.Watch,
        status: ProductStatus.Rejected,
    },
    {
        key: "9",
        id: "00009",
        name: "Jessie Moore",
        address: "10007 Kertzmann Valley",
        date: "30 Apr 2019",
        type: ProductType.Book,
        status: ProductStatus.OnHold,
    },
    {
        key: "10",
        id: "00010",
        name: "John",
        address: "10007 Kertzmann Valley",
        date: "30 Apr 2019",
        type: ProductType.Electric,
        status: ProductStatus.InTransit,
    }
]

const Products = () => {
    const { token } = theme.useToken();

    const columns: TableProps<DataType>["columns"] = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            align: "left",
            width: "10%",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            align: "left",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            align: "left",
            width: "25%",
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            align: "left",
            width: "15%",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
            align: "left",
            width: "15%",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            align: "center",
            width: "15%",
        }
    ]

    const pagination: PaginationProps = {
        total: 50,
        current: 1,
        pageSize: 20,
    }

    const scroll: TableProps<DataType>['scroll'] = {
        y: 520,
        scrollToFirstRowOnChange: true,
    }


    return (
        <Page title="Products">
            <Flex vertical gap={token.sizeLG}>
                <ProductFilter />
                <Table columns={columns} dataSource={dataScource} pagination={pagination} scroll={scroll} />
            </Flex>
        </Page>
    )
}

export default Products;