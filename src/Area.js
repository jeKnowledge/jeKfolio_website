import { useState } from "react";
import ProjectData from "./projects.json";


const Area = ({field, title}) => {

  const [show, setShow]=useState(false);
  const onClick = () => setShow(!show)
  return ( 
   <div className="area">
    <h2 onClick={onClick}>{title}</h2>

    <div className="projects_area">

    { ProjectData[field].map(( detail ) => {
      
      return (
      <div>
      {show && <div className="project" key={detail.id}>
        
        <div className="project_img">
          <img src={detail.cover}></img>
        </div>

        <div className="project_text">
          <h5>{detail.data}</h5>
          <h3>{detail.title} </h3>
        </div> 
      </div>}
      </div>

      )})}
    </div>
    </div>
   );
}

export default Area;




