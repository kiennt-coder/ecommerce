export type RegisterFormField = {
    email: string;
    username?: string;
    password: string;
    acceptTerm: boolean;
};

export type LoginFormField = {
    email: string;
    password: string;
    remember?: boolean;
};