import { Button } from "antd";
import styled from "styled-components";
import { CustomButtonProps } from "./types";


const ButtonWrapper = styled(Button)<CustomButtonProps>`
    max-width: ${({width}) => width ? `${width}px` : "max-content"};
    width: 100%;
`

export default ButtonWrapper;