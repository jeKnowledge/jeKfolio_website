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
                    <p><span>By: </span> </p>
                    <a href={detail.design[0]} target="_blank" class="person"><p>{detail.design[1]}</p></a>
                    <a href={detail.design[2]} target="_blank" class="person"><p>{detail.design[3]}</p></a>
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
                  <p><b>Made for </b> {detail.cliente} </p>
                  <p><b>{detail.data}</b></p>
                  <p><b>Technologies: </b> {detail.tecs} </p>
                  <p><b>UX/UI: </b></p> <a href={detail.ux[0]} target="_blank"> <p class="person">{detail.ux[1]}</p></a>
                  <a href={detail.ux[2]} target="_blank"><p class="person">{detail.ux[3]}</p></a><a href={detail.ux[4]} target="_blank"><p class="person">{detail.ux[5]}</p></a>
                  <p><b>Frontend: </b></p>
                  <a href={detail.frontend[0]} target="_blank"><p class="person">{detail.frontend[1]}</p></a>
                  <p><b>Backend: </b></p>
                  <a href={detail.backend[0]} target="_blank"><p class="person">{detail.backend[1]}</p></a>
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