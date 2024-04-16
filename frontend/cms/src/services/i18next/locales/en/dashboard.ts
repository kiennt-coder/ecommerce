import { Dashboard } from "../../i18nextTypes";

const dashboard: Dashboard = {
    Title: "Dashboard",
    TotalBox: {
        User: {
            Title: "Total User",
            Description: "{{direction}} from {{day}}"
        },
        Order: {
            Title: "Total Order",
            Description: "{{direction}} from {{day}}"
        },
        Sales: {
            Title: "Total Sales",
            Description: "{{direction}} from {{day}}"
        },
        Pending: {
            Title: "Total Pending",
            Description: "{{direction}} from {{day}}"
        }
    }
}

export default dashboard;