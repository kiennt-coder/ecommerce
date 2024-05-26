import ButtonWrapper from "./styled";
import { CustomButtonProps } from "./types";

const Button = ({ children, ...props }: CustomButtonProps) => {
    return (
        <ButtonWrapper {...props}>
            {children}
        </ButtonWrapper>
    )
}

export default Button;