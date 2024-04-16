import { Dropdown, DropDownProps } from "antd";
import styled from "styled-components";

type HeaderDropdownWrapperProps = DropDownProps & {
	isDropdownOpen: boolean;
};

export const HeaderDropdownWrapper = styled(
	Dropdown
)<HeaderDropdownWrapperProps>`
	&.header-dropdown__link {
		display: block;
	}

	.header-dropdown__icon {
		vertical-align: middle;
		transform: ${({ isDropdownOpen }) =>
			isDropdownOpen ? "rotate(-180deg)" : "rotate(0deg)"};
		transition: transform 0.3s ease-in-out;
	}
`;
