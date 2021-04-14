import React from 'react';
import Websites from './Websites.js';
import Software from './Software.js';
import Design from './Design.js';

class Menu extends React.Component{

    constructor(props){
        super(props);
        this.state={
            show:false 
        }
    }
    render(){
    return ( 
        <div className="menu">

            <div className="area">
            <h2 onClick={ () => {
                this.setState({ show:!this.state.show})
                }}> Websites</h2>
                {this.state.show ?          // if this 
                    <Websites></Websites> // do this
                    : null                //else null
                }
            </div>

            <div className="area">
            <h2 onClick={()=>{this.setState({show:!this.state.show})}}> Software</h2>
            { this.state.show ? <Software></Software> : null }
                
            </div>

            <div className="area">
            <h2>Design</h2>
            <Design></Design>
            </div>
            
            <div className="area">
            <h2>Hardware</h2>
            </div>

        </div>
    )}
}
 
export default Menu ;