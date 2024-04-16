import enUS from 'antd/locale/en_US';
import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";

import "./App.css";
import i18next from "./services/i18next"
import { RootState } from "./configs/store/reducers";
import { Theme } from "./configs/store/reducers/config/configTypes";
import { defaultThemeConfig, darkThemeConfig } from "./configs/themes";
import { RouterProvider } from 'react-router-dom';
import router from './configs/router';
import { I18nextProvider } from 'react-i18next';

function App() {
    const { theme } = useSelector((state: RootState) => state.configs);

    return (
        <I18nextProvider i18n={i18next}>
            <ConfigProvider
                theme={
                    theme === Theme.Default ? defaultThemeConfig : darkThemeConfig
                }
                locale={enUS}
            >
                <RouterProvider router={router} />
            </ConfigProvider>

        </I18nextProvider>
    );
}

export default App;
