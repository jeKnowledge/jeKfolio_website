import React from 'react';
import './css/home.css';
import './css/menu.css';
import icon_jek from './img/icon.svg';
import logo_jekfolio from './img/jekfolio.svg';

import Menu from './Menu'

const Home = () => {

    return(
        <div className="Home">
            <header className="header">
            <img src={logo_jekfolio} alt="logo" /> 
            <a  href='https://jeknowledge.pt' target="_blank"><img src={icon_jek} id="jek_logo"  alt="logo jeK"/></a>
            </header>
            
        <div className="home">   
            <h1>Hi! We're jeKnowledge!</h1>
        </div> 
       
        <div className="menu">
            <Menu></Menu>
        </div>

        </div>


        





    );
  
}
export default Home;