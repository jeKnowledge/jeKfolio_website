import ProjectData from "./projects.json";
import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';


const ProjectDetails = () => {
    const{field}=useParams(); 
    const{id}=useParams(); 
    let history = useHistory();


return( 
    <div className="project-details">
        {ProjectData[field].map((detail) => {
        if(detail.id==id){

          if(field=='design'){
            return(
              <div className="project-info" key={id}>
    
              <a href={detail.link} target="_blank"><h1>{detail.title} </h1></a>

              <div className="project-text">

                <div className="project-desc">
                  <p>{detail.descricao}</p>
                </div> 

                <div className="project-about">
                  <p><span>Made for </span> {detail.cliente} </p>
                  <p><span>{detail.data}</span></p>
                  <p><span>Using</span>{detail.tecs}</p>
                    <p>By: {detail.design} </p>
                </div>

              </div>

              <div className="project-gallery design">
                  <div>
                    <img src={detail.img[0]} alt="imagem"></img>
                    <img src={detail.img[1]} alt="imagem"></img>
                  </div>
                  <div>
                    <img src={detail.img[2]} alt="imagem"></img>
                    <img src={detail.img[3]} alt="imagem"></img>
                  </div>
                
              </div>

              <button onClick={() => history.goBack()}>Back</button>
          </div>  
            )
          }

        else{
        
        return (
        
          <div className="project-info" key={id}>
    
              <a href={detail.link} target="_blank"><h1>{detail.title} </h1></a>

              <div className="project-text">

                <div className="project-desc">
                  <p>{detail.descricao}</p>
                </div> 

                <div className="project-about">
                  <p><span>Made for </span> {detail.cliente} </p>
                  <p><span>{detail.data}</span></p>
                  <p><span>Using </span>{detail.tecs}</p>
                    <a href={detail.ux[1]} target="_blank" class="person"><p>UX/UI: {detail.ux[0]} </p></a>
                    <a href={detail.ux[1]} target="_blank" class="person"><p>Frontend: {detail.frontend[0]}</p></a>
                    <a href={detail.ux[1]} target="_blank" class="person"><p>Backend: {detail.backend[0]}</p></a>
                </div>

              </div>

              <div className="project-gallery">
                  <img src={detail.img[0]} alt="imagem"></img>
                  <img src={detail.img[1]} alt="imagem"></img>
                
              </div>

              <button onClick={() => history.goBack()}>Back</button>
          </div>   


        )}
        }
        })}


    </div>


);

}
export default ProjectDetails;