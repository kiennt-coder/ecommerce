import { GetProps } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

// Create Icon props type
type IconProps = GetProps<typeof Icon>;

// Group icon
const GroupSvg = () => (
    <svg
        width="2.286rem"
        height="1.714rem"
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            opacity="0.587821"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.66667 5.33333C6.66667 8.27885 9.05449 10.6667 12 10.6667C14.9455 10.6667 17.3333 8.27885 17.3333 5.33333C17.3333 2.38781 14.9455 0 12 0C9.05449 0 6.66667 2.38781 6.66667 5.33333ZM20 10.6667C20 12.8758 21.7909 14.6667 24 14.6667C26.2091 14.6667 28 12.8758 28 10.6667C28 8.45753 26.2091 6.66667 24 6.66667C21.7909 6.66667 20 8.45753 20 10.6667Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9778 13.3333C5.68255 13.3333 0.517678 16.5687 0.000868912 22.9323C-0.0272823 23.2789 0.635616 24 0.970003 24H22.9956C23.9972 24 24.0128 23.194 23.9972 22.9333C23.6065 16.3909 18.3616 13.3333 11.9778 13.3333ZM31.2746 24L26.1333 24C26.1333 20.9988 25.1417 18.2291 23.4683 16.0008C28.0103 16.0505 31.7189 18.3469 31.998 23.2C32.0092 23.3955 31.998 24 31.2746 24Z"
            fill="currentColor"
        />
    </svg>
);

const GroupFilled = (props: Partial<IconProps>) => {
    return <Icon component={GroupSvg} {...props} />;
};

export default GroupFilled;