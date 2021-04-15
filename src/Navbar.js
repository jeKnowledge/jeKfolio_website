import icon_jek from './img/icon.svg';
import logo_jekfolio from './img/jekfolio.svg';
const Navbar = () => {
    
    return(
    <header className="header">
    <img src={logo_jekfolio} alt="logo" /> 
    <a  href='https://jeknowledge.pt' target="_blank"><img src={icon_jek} id="jek_logo"  alt="logo jeK"/></a>
    </header>
);
}
export default Navbar;