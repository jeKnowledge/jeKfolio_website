import React from 'react';
import './css/home.css';
import './css/menu.css';
import './css/projeto.css';
import ProjectList from './ProjectList.js';
import seta from './img/seta5.svg';

const Home = () => {

    return(
        <div className="home">

            <div id="intro">
                <h1>Hi, we're jeKnowledge and <br/> this is our work!</h1>
                <h1 id="subtitulo">We do plenty of things, <br/> some of them are...</h1>
            </div>

            <div className="menu">
                <ProjectList field="websites" title="Website / App"></ProjectList> 
                <ProjectList field="software" title="Software"></ProjectList> 
                <ProjectList field="design" title="Design"></ProjectList>
                <ProjectList field="eventos" title="Events"></ProjectList>

            </div>
            
        </div>
    );
    }


export default Home;







