import { GetProps } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

// Create Icon props type
type IconProps = GetProps<typeof Icon>;

// Container icon
const ContainerSvg = () => (
    <svg
        width="2.143rem"
        height="2.429rem"
        viewBox="0 0 30 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 11.3165L12.9005 18.7646C13.0394 18.8448 13.1851 18.9027 13.3333 18.9395V33.3847L0.920065 26.0385C0.349784 25.701 0 25.0876 0 24.4249V11.3165ZM30 11.1185V24.4249C30 25.0876 29.6502 25.701 29.0799 26.0385L16.6667 33.3847V18.8129C16.6969 18.7978 16.7269 18.7817 16.7566 18.7646L30 11.1185Z"
            fill="currentColor"
        />
        <path
            opacity="0.499209"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.405212 7.70142C0.562787 7.50244 0.761675 7.33426 0.993554 7.21076L14.1186 0.2201C14.6695 -0.0733665 15.3304 -0.0733665 15.8814 0.2201L29.0064 7.21076C29.1852 7.30596 29.3443 7.42771 29.48 7.56966L15.0899 15.8778C14.9953 15.9325 14.908 15.995 14.8285 16.064C14.749 15.995 14.6618 15.9325 14.5671 15.8778L0.405212 7.70142Z"
            fill="currentColor"
        />
    </svg>
);

const ContainerFilled = (props: Partial<IconProps>) => {
    return <Icon component={ContainerSvg} {...props} />;
};

export default ContainerFilled;