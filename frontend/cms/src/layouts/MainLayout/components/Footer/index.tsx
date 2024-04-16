import { Layout } from "antd";

const { Footer: FooterAntd } = Layout;

const Footer = () => {
    return (
        <FooterAntd style={{ textAlign: "center" }}>
            Ecommerce CMS ©{new Date().getFullYear()} Created by kiennt.coder
        </FooterAntd>
    );
};

export default Footer;
