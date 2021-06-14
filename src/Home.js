import React from 'react';
import './css/home.css';
import './css/menu.css';
import './css/projeto.css';
import ProjectList from './ProjectList.js';
import seta from './img/seta2.svg';


const Home = () => {

    return(
        <div className="home">

            <div id="intro">
                <h1>Hi! We're jeKnowledge, <br/> this is our work!</h1>
                <h1 id="subtitulo">We do plenty of things, <br/> some of them are...</h1>
            </div>
            <img id="seta" src={seta} alt="seta"/>

            <div className="menu">
                <ProjectList field="websites" title="Website / App"></ProjectList> 
                <ProjectList field="software" title="Software"></ProjectList> 
                <ProjectList field="design" title="Design"></ProjectList>
            </div>
            
        </div>
    );
    }


export default Home;







