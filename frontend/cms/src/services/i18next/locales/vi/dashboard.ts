import { Dashboard } from "../../i18nextTypes";

const dashboard: Dashboard = {
    Title: "Bảng điều khiển",
    TotalBox: {
        User: {
            Title: "Tổng số người dùng",
            Description: "{{direction}} từ {{day}}"
        },
        Order: {
            Title: "Tổng số đơn hàng",
            Description: "{{direction}} từ {{day}}"
        },
        Sales: {
            Title: "Tổng doanh thu",
            Description: "{{direction}} từ {{day}}"
        },
        Pending: {
            Title: "Tổng đơn hàng chờ duyệt",
            Description: "{{direction}} từ {{day}}"
        }
    }
}

export default dashboard;