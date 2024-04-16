import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Select, SelectProps, Space, Typography } from "antd";

import { HeaderTranslationWrapper } from "./styled";
import { AppDispatch } from "../../../../../../configs/store";
import { RootState } from "../../../../../../configs/store/reducers";
import { Language } from "../../../../../../configs/store/reducers/config/configTypes";
import { setLanguage } from "../../../../../../configs/store/reducers/config/configActions";

const { Text } = Typography;

type Languge = {
    label: string;
    value: string;
    icon: string;
};

type LabelRender = SelectProps["labelRender"];

const languges: Languge[] = [
    {
        label: "English",
        value: "en",
        icon: "/assets/images/flags/GB.png",
    },
    {
        label: "Vietnamese",
        value: "vi",
        icon: "/assets/images/flags/VN.png",
    },
];

const labelRender: LabelRender = (props) => {
    const { label, value } = props;

    const currentLanguage = languges.find((l) => l.value === value);

    return (
        <Space>
            <Avatar
                shape="square"
                src={<img src={currentLanguage?.icon} alt="Languge Icon" />}
                style={{ width: 48 }}
            />
            <Text className="header-translation-select__text-active">
                {label}
            </Text>
        </Space>
    );
};

const HeaderTranslation = () => {
    // I18next
    const { i18n } = useTranslation();

    // Store
    const configs = useSelector((state: RootState) => state.configs);

    // Dispatch
    const dispatch = useDispatch<AppDispatch>();

    // Hanlde language change
    const handleTranslationSelectChange = (value: Language) => {
        i18n.changeLanguage(value);
        dispatch(setLanguage(value));
    };

    const selectProps: SelectProps = {
        options: languges,
        popupMatchSelectWidth: false,
        defaultValue: configs.language,
        variant: "borderless",
        style: { verticalAlign: "middle" },
        className: "header-translation-select--responsive",
        labelRender: labelRender,
        onChange: handleTranslationSelectChange,
    };

    return (
        <HeaderTranslationWrapper>
            <Select {...selectProps} />
        </HeaderTranslationWrapper>
    );
};

export default HeaderTranslation;
