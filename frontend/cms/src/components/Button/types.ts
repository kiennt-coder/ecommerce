import { ButtonProps } from "antd";

export enum ButtonWidth {
    Medium = 274,
    Large = 418,
}

export type CustomButtonProps = ButtonProps & {
    width?: ButtonWidth | number;
}