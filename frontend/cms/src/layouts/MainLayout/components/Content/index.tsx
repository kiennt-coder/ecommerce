import ContentWrapper from "./styled";

type ContentProps = {
    children?: React.ReactNode;
}

const Content = ({ children }: ContentProps) => {

    return (
        <ContentWrapper>
            {children}
        </ContentWrapper>
    );
};

export default Content;
