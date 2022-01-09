import ProjectData from "./projects.json";
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Software = () => {
  // const flavoursContainer = document.getElementById('flavoursContainer');
  const div = document.getElementsByClassName('projects_area');

  const { field } = useParams();
  const { id } = useParams();
  let history = useHistory();


  return (
    <div className="project-details">
      {ProjectData['software'].map((detail) => {
        if (detail.id == id) {


          return (

            <div className="project-info" key={id}>

              <a href={detail.link} target="_blank"><h1><u>{detail.title}</u></h1></a>

              <div className="project-text">

                <div className="project-desc">
                  <p>{detail.descricao}</p>
                </div>

                <div className="project-about">
                  <p><b>{detail.data}</b></p>
                  <p><b>Client: </b> {detail.cliente} </p>
                  <p><b>Technologies: </b> {detail.tecs} </p>
                  <p><b>By:</b> </p>
                  {
                    detail.by.map((person) => {
                      return (
                        <p>{person[0]}
                          <a href={person[2]} target="_blank"> - <u>{person[1]}</u> </a>
                        </p>


                      )
                    })
                  }
                </div>

              </div>

              <div className="project-gallery">
                <img src={detail.img[0]} alt="imagem"></img>
                <img src={detail.img[1]} alt="imagem"></img>
              </div>

              <button id="back" onClick={() => history.goBack()}>Back</button>
            </div>


          )
        }
      })}


    </div>


  );

}
export default Software;