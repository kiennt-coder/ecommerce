import { GetProps } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

// Create Icon props type
type IconProps = GetProps<typeof Icon>;

// Chart icon
const ChartSvg = () => (
    <svg
        width="2rem"
        height="2rem"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M3.11111 24.8889H26.4444C27.3036 24.8889 28 25.5853 28 26.4444C28 27.3036 27.3036 28 26.4444 28H1.55556C0.696446 28 0 27.3036 0 26.4444V1.55556C0 0.696446 0.696446 0 1.55556 0C2.41467 0 3.11111 0.696446 3.11111 1.55556V24.8889Z"
            fill="currentColor"
        />
        <path
            opacity="0.5"
            d="M8.91263 18.175C8.32504 18.8018 7.34063 18.8335 6.71388 18.2459C6.08713 17.6584 6.05537 16.674 6.64295 16.0472L12.4763 9.82498C13.0445 9.21884 13.9888 9.16627 14.6209 9.7056L19.2249 13.6344L25.2235 6.03611C25.7559 5.36181 26.734 5.24673 27.4083 5.77907C28.0826 6.31141 28.1977 7.28959 27.6654 7.96389L20.6654 16.8306C20.1186 17.5231 19.1059 17.6227 18.4347 17.05L13.7306 13.0358L8.91263 18.175Z"
            fill="currentColor"
        />
    </svg>
);

const ChartFilled = (props: Partial<IconProps>) => {
    return <Icon component={ChartSvg} {...props} />;
};

export default ChartFilled;
