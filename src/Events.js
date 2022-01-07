import ProjectData from "./projects.json";
import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Events = () => {
  const div = document.getElementsByClassName('projects_area');

  const { field } = useParams();
  const { id } = useParams();
  let history = useHistory();

  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
         arrows: true,

        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
        }
       }
    ]
  };

  return (

    <div className="project-details">
      {ProjectData['eventos'].map((detail) => {

        if (detail.id == id) {
 
          return (
            <div className="project-info event" key={id}>

              <a href={detail.link} target="_blank"><h1>{detail.title} </h1></a>

              <div className="project-text events">

                <div className="project-about">
                  <p>{detail.data}</p>
                </div>

                <div className="project-desc-events">
                  <p>{detail.descricao}</p>
                </div>

              </div>
              <div id="events-gallery" >
                
                <Slider {...settings}>
                  {
                              detail.img.map((image)=> {
                                return(
                                <div>
                                  <img src={image} alt="imagem"></img>
                                  <p>{image[1]}</p>
                                </div>
                                )
                              })
                  }
                  
                </Slider>
                </div>

              <button id="back" onClick={() => history.goBack()}>Back</button>
            </div>

          )



        }

      })}
    </div>

  );

}
export default Events;

