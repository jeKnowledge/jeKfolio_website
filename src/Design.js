import ProjectData from "./projects.json";
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Design = () => {
  // const flavoursContainer = document.getElementById('flavoursContainer');
  const div = document.getElementsByClassName('projects_area');

    const{field}=useParams(); 
    const{id}=useParams(); 
    let history = useHistory();


return( 
    <div className="project-details">
        {ProjectData['design'].map((detail) => {
        if(detail.id==id){

            
            return(
              <div className="project-info" key={id}>
    
              <a href={detail.link} target="_blank"><h1>{detail.title} </h1></a>

              <div className="project-text">

                <div className="project-desc">
                  <p>{detail.descricao}</p>
                </div> 

                <div className="project-about">
                <p><b>{detail.data}</b></p>
                  <p><b>Client: </b> {detail.cliente} </p>
                  <p><b>Using: </b> {detail.tecs} </p>
                  <p><b>By: </b> {detail.by} </p>
  
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

              <button id="back" onClick={() => history.goBack()}>Back</button>
            </div>  
            )
          }
        
        })}
        </div>

        );
          
}
          export default Design;