import React from 'react';
import Area from './Area.js';

class Menu extends React.Component{
    render(){
    return ( 
        <div className="menu">

            <Area field="websites" title="Websites"></Area> 
             
            <Area field="software" title="Software"></Area> 

            <Area field="design" title="Design"></Area>
        
        </div>
    )}
}
 
export default Menu ;