import { Flex } from "antd";
import styled from "styled-components";

export const TableWrapper = styled(Flex)`
    .ant-table {
        border-radius: 8px;
    }

    .ant-pagination {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .ant-pagination-total-text {
            flex-grow: 1;
        }

        .ant-pagination-prev,
        .ant-pagination-next {
            .ant-btn {
                width: 43px;
            }
        }

        .ant-pagination-prev {
            margin-right: -1px;

            .ant-btn {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }

            .ant-btn:hover {
                z-index: 1;
            }
        }

        .ant-pagination-next {
            .ant-btn {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
    }
`