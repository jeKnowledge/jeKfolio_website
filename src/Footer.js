
import icon_jek_white from './img/icon-jek-white.svg';

const Footer = () => {
    
    return(
    <footer className="footer">
        
        <div className="footer-adress"> 
            <p>jeKnowledge Associação
            <br/>Rua Larga
            <br/>Departamento de Física, B3
            <br/>P-3004-516, Coimbra</p>
        </div>
        <div className="footer-middle">
           <a href="https://www.facebook.com/jeknowledge" target="_blank"> <img class="social" src="https://i.imgur.com/5570vBY.png" alt="facebook"/></a>
           <a  href='https://jeknowledge.pt' target="_blank"><img src={icon_jek_white} id="jek_logo"  alt="logo jeK"/> </a>
           <a href="https://www.instagram.com/jeknowledge/" target="_blank"> <img class="social" src="https://i.imgur.com/RFkzR0T.png" alt="instagram"/></a>

        </div>
        <div className="contacts">
        <p>geral@jeknowledge.com
            <br/>+351 926 590 223
            <br/>This website is
            <br/>© jeKnowledge 2021</p>
        </div>
    
    </footer>
);
}
export default Footer;