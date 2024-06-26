import { forwardRef } from "react";
import { GetProps, theme } from "antd";
import Icon from "@ant-design/icons/lib/components/Icon";

// Create Icon props type
type IconProps = GetProps<typeof Icon>;

// Bell Icon
const BellSvg = () => {
    // Get token theme
    const { token } = theme.useToken();

    return (
        <svg
            width="1em"
            height="1.143em"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.0277 0C7.73472 0 5.80843 1.72411 5.55522 4.00306L4.5 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.5C23.3284 18 24 17.3284 24 16.5V15C24 14.1716 23.3284 13.5 22.5 13.5H19.5L18.4448 4.00306C18.1916 1.72411 16.2653 0 13.9723 0H10.0277Z"
                fill={token.colorPrimary}
            />
            <rect
                opacity="0.3"
                x="9"
                y="19.5"
                width="6"
                height="6"
                rx="2.25"
                fill={token.orange}
            />
        </svg>
    )
}

const BellFilled = forwardRef<HTMLSpanElement, Partial<IconProps>>(
    (props, ref) => {
        return <Icon ref={ref} component={BellSvg} {...props} />;
    }
);

export default BellFilled;
