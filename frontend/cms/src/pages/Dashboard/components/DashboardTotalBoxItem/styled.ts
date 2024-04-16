import { Card, theme } from "antd";
import styled from "styled-components";
import { defaultThemeConfig } from "../../../../configs/themes";

const { getDesignToken } = theme;

const globalToken = getDesignToken(defaultThemeConfig);

export const DashboardTotalBoxItemWapper = styled(Card)`
	.dashboard-total-box__content {
		flex-grow: 1;

		.ant-statistic-content-value {
			font-size: ${globalToken.fontSizeHeading2}px;
		}
	}

	.dashboard-total-box__icon {
		flex-shrink: 0;
		position: relative;
		width: 4.286rem;
		height: 4.286rem;

		&::before {
			content: "";
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background: currentColor;
			opacity: 0.2;
			border-radius: 1.714rem;
		}
	}

	.dashboard-total-box__description {
		margin-top: ${globalToken.marginMD}px;

		.dashboard-total-box__percent {
			flex-shrink: 0;

			.ant-statistic-content {
				font-size: ${globalToken.fontSize}px;
			}
		}
	}
`;
