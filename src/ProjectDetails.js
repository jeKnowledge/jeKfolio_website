import ProjectData from "./projects.json";
import React from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";



const ProjectDetails = () => {
  // const flavoursContainer = document.getElementById('flavoursContainer');
  const div = document.getElementsByClassName('projects_area');

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
                <p><b>{detail.data}</b></p>
                  <p><b>Made for </b> {detail.cliente} </p>
                  <p><b>Using: </b> {detail.tecs} </p>
                  <p><b>By: </b> {detail.by} </p>
  
                </div>

              </div>

              <div className="project-gallery design">
                  <div>
                    <img src={detail.img[0]||<Skeleton/>} alt="imagem"></img>
                    <img src={detail.img[1]||<Skeleton/>} alt="imagem"></img>
                  </div>
                  <div>
                    <img src={detail.img[2]||<Skeleton/>} alt="imagem"></img>
                    <img src={detail.img[3]||<Skeleton/>} alt="imagem"></img>
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
                <p><b>{detail.data}</b></p>
                  <p><b>Made for </b> {detail.cliente} </p>
                  <p><b>Technologies: </b> {detail.tecs} </p>
                  <p><b>By: </b> {detail.by} </p>
                  </div>
               
              </div>
            
              <div className="project-gallery">
                  <img src={detail.img[0]|| <Skeleton/>} alt="imagem"></img>
                  <img src={detail.img[1]||<Skeleton/>} alt="imagem"></img>
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