import { useState } from "react";
import ProjectData from "./projects.json";
import { Link, Router, withRouter } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'

const ProjectList = ({field, title}) => {

  const [show, setShow]=useState(false);
  const onClick = () => setShow(!show)
  
  const ProjectList = ProjectData[field]
  
  return ( 
   <div className="area">
      <h2 onClick={onClick}>{title}</h2>
      
      { show  && <div className="projects">
      <ul>
      {
      ProjectList.slice(0).reverse().map(( detail ) => {

          return (
            <li className="project" key={detail.id } >
              
                <Link to={`/projects/${field}/${detail.id}`}>
                  <div className="project_img">
                    <img src={detail.cover || <Skeleton />} alt="capa"/> 
                  </div>
                  <div className="project_text">
                    <h5>{detail.data}</h5>
                    <h3>{detail.title || <Skeleton />} </h3>
                  </div>  
                </Link>
            </li>
   
          )
        })
      }
                  </ul>

        </div>
        }
        
    </div>
   );  
}
export default ProjectList;




