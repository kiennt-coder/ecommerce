import { useTranslation } from "react-i18next";
import { Page } from "../../components";
import { DashboardTotalBoxSection } from "./components";

const Dashboard = () => {
    // i18next
    const { t } = useTranslation(["dashboard"])

    // Get title dashboard
    const titleDashboard = t("Title")

    return (
        <Page title={titleDashboard}>
            <DashboardTotalBoxSection />
        </Page>
    );
};

export default Dashboard;
