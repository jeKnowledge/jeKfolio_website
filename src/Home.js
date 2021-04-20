import React from 'react';
import './css/home.css';
import './css/menu.css';
import './css/projeto.css';


import Menu from './Menu'

const Home = () => {

    return(
        <div className="home">
            
            <h1>Hi! We're jeKnowledge, this is our work!</h1>
            <h1>We do</h1>
       
            <Menu></Menu>
            
        </div>

    );
  
}
export default Home;