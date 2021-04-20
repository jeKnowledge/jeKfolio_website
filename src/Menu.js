import React from 'react';
import ProjectList from './ProjectList.js';


class Menu extends React.Component{
    render(){
    return ( 
        <div className="menu">

            <ProjectList field="websites" title="Websites"></ProjectList> 
             
            <ProjectList field="software" title="Software"></ProjectList> 

            <ProjectList field="design" title="Design"></ProjectList>
       
        
        </div>
    )}
}
 
export default Menu ;