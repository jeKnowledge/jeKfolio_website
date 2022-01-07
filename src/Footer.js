
import icon_jek_white from './img/icon-jek-white.svg';
import facebook from './img/facebook.svg';
import instagram from './img/instagram.svg';

const Footer = () => {

    return (
        <footer className="footer">

            <div className="footer-adress">
                <p>jeKnowledge Associação
            <br />Rua Larga
            <br />Departamento de Física, B3
            <br />P-3004-516, Coimbra</p>
            </div>
            
            <div className="footer-middle">
                <a href="https://www.facebook.com/jeknowledge" target="_blank"> <img class="social" src={facebook} alt="facebook" /></a>
                <a href='https://jeknowledge.pt' target="_blank"><img src={icon_jek_white} id="jek_logo" alt="logo jeK" /> </a>
                <a href="https://www.instagram.com/jeknowledge/" target="_blank"> <img class="social" src={instagram} alt="instagram" /></a>
            </div>

            <div className="contacts">
                <p>geral@jeknowledge.com
            <br />+351 919 818 111
            <br />This website is
            <br />© jeKnowledge 2021</p>
            </div>

        </footer>
    );
}
export default Footer;