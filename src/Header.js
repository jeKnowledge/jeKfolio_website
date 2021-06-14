import icon_jek from './img/icon.svg';
import logo_jekfolio from './img/jekfolio.svg';
import { Link, Router } from 'react-router-dom';

const Header = () => {
    
    return(
    <header className="header">
    <Link to="/">
    <img src={logo_jekfolio} alt="logo" id="jekfolio_logo" /> 
    </Link>
    <a  href='https://jeknowledge.pt' target="_blank"><img src={icon_jek} id="jek_logo"  alt="logo jeK"/></a>
    </header>
);
}
export default Header;