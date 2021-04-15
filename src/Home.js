import React from 'react';
import './css/home.css';
import './css/menu.css';
import './css/projeto.css';


import Menu from './Menu'
import Navbar from './Navbar'

const Home = () => {

    return(
        <div className="Home">
            <Navbar></Navbar>
            
        <div className="home">   
            <h1>Hi! We're jeKnowledge!</h1>
        </div> 
       
            <Menu></Menu>
            
        </div>





    );
  
}
export default Home;