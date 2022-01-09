
import icon_jek_white from './img/icon-jek-white.svg';
import facebook from './img/facebook.svg';
import instagram from './img/instagram.svg';
import linkedin from './img/linkedin.svg';
import logoHorizontal from './img/icon-title-desc-inv.svg';

const Footer = () => {

    return (
        <footer className="footer">

            <div className="footer-adress">
                <div className="social">
                <a href="https://www.facebook.com/jeknowledge" target="_blank"> <img className="social-img" src={facebook} alt="facebook" /></a>
                <a href="https://www.linkedin.com/company/jeknowledge/" target="_blank"><img className="social-img" src={linkedin} alt="linkedin" /></a>
                <a href="https://www.instagram.com/jeknowledge/" target="_blank"> <img className="social-img" src={instagram} alt="instagram" /></a>
                </div>
                <p>jeKnowledge Associação
            <br />Rua Larga
            <br />Departamento de Física, B3
            <br />P-3004-516, Coimbra</p>
            </div>

            <div className="footer-middle">
                <h1>Get in touch with us!</h1>
                <p>Click this button.</p>
                <a href="https://jeknowledge.pt/views/hello/" target="_blank">Click me!</a>

            </div>

            <div className="footer-contacts">
                <a href='https://jeknowledge.pt' target="_blank">
                    <img src={logoHorizontal} id="jek_logo_hor" alt="logo jeK" />
                </a>
                <p>geral@jeknowledge.com
            <br />+351 919 818 111
            <br />This website is
            <br />© jeKnowledge 2021</p>
            </div>

        </footer>
    );
}
export default Footer;