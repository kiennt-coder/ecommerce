import {
    Pagination,
    PaginationProps,
    Table as TableAnt,
    TableProps,
    theme,
} from "antd";

import { TableWrapper } from "./styled";

type TableCustomProps = Omit<TableProps, "pagination"> & {
    pagination: PaginationProps;
};

const Table = ({ columns, dataSource, pagination, scroll }: TableCustomProps) => {
    const { token } = theme.useToken();

    return (
        <TableWrapper vertical gap={token.sizeLG}>
            <TableAnt columns={columns} dataSource={dataSource} scroll={scroll} pagination={false} />
            <Pagination
                defaultCurrent={pagination.current}
                total={pagination.total}
                pageSize={pagination.pageSize}
                showTotal={(total, range) =>
                    `Showing ${range[0]}-${range[1]} of ${total}`
                }
            />
        </TableWrapper>
    );
};

export default Table;
