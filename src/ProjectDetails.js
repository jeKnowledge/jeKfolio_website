import ProjectData from "./projects.json";

import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ProjectDetails = () => {
    const{field}=useParams(); 
    const{id}=useParams(); 

return( 
    <div className="project-details">
       

        {ProjectData[field].map((detail) => {
        if(detail.id==id){
        
        return (
        <div>
        
             <div className="project-info" key={id}>
            

              <div className="project-cover">
                <img src={detail.cover} alt="capa"></img>
              </div>

              <div className="project_text">
                <h3>{detail.title} </h3>
                <h5>Cliente {detail.cliente} </h5>
                <h5>Autores {detail.autor} </h5>

              </div> 


          </div>
      
        </div>   
        )
        }
        })}






    </div>






);

}
export default ProjectDetails;