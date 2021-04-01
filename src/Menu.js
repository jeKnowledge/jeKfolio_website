import Websites from './Websites.jsx';
import Software from './Software.jsx';
import Design from './Design.jsx';

const Menu = () => {
    return ( 
        <div className="menu">

            <div className="area">
            <h2>Websites</h2>
            <Websites></Websites>


            </div>

            <div className="area">
            <h2>Software</h2>
            <Software></Software>
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
 
export default Menu ;