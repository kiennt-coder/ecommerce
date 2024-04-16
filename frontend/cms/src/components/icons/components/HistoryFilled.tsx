import { GetProps } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

// Create Icon props type
type IconProps = GetProps<typeof Icon>;

// History icon
const HistorySvg = () => (
    <svg
        width="2rem"
        height="2.214rem"
        viewBox="0 0 28 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            opacity="0.78"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6312 9.80884C12.6512 9.54834 12.8684 9.34719 13.1297 9.34719H13.5475C13.8044 9.34719 14.0195 9.54184 14.045 9.79744L14.6667 16.0139L19.0814 18.5366C19.2372 18.6256 19.3333 18.7913 19.3333 18.9707V19.3592C19.3333 19.6889 19.0199 19.9284 18.7018 19.8416L12.3987 18.1226C12.1673 18.0595 12.0133 17.841 12.0317 17.6019L12.6312 9.80884Z"
            fill="currentColor"
        />
        <path
            opacity="0.901274"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.72176 0.984394C6.45765 0.669646 5.94771 0.790115 5.85238 1.18978L4.21891 8.03792C4.14123 8.36357 4.39931 8.67207 4.73356 8.65312L11.7783 8.25391C12.1892 8.23062 12.3976 7.7486 12.133 7.43332L10.3316 5.28647C11.4965 4.88843 12.7317 4.68052 14 4.68052C20.2592 4.68052 25.3333 9.75463 25.3333 16.0139C25.3333 22.2731 20.2592 27.3472 14 27.3472C7.74077 27.3472 2.66667 22.2731 2.66667 16.0139C2.66667 14.9631 2.80896 13.9339 3.08641 12.9448L0.518845 12.2246C0.180793 13.4298 0 14.7007 0 16.0139C0 23.7458 6.26801 30.0139 14 30.0139C21.732 30.0139 28 23.7458 28 16.0139C28 8.28187 21.732 2.01386 14 2.01386C12.0551 2.01386 10.2029 2.41043 8.51973 3.12713L6.72176 0.984394Z"
            fill="currentColor"
        />
    </svg>
);

const HistoryFilled = (props: Partial<IconProps>) => {
    return <Icon component={HistorySvg} {...props} />;
};

export default HistoryFilled;
