import { useState } from "react";
import ProjectData from "./projects.json";
import { Link, Router, withRouter } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const ProjectList = ({field, title }) => {

  const [show, setShow]=useState(false);
  const onClick = () => setShow(!show)
  return ( 
   <div className="area">
      <h2 onClick={onClick}>{title}</h2>
      
      { show  && <div className="projects_area" >
      {
      ProjectData[field].map(( detail ) => {


          return (

            
            <div className="project" key={detail.id || <Skeleton/> } >
                <Link to={`/projects/${field}/${detail.id}`}> 
                <div className="project_img">
                <img src={detail.cover || <Skeleton height={50} width={50}/> } alt="capa"/>          
                </div>
                  <div className="project_text">
                    <h5>{detail.data || <Skeleton/>}</h5>
                    <h3>{detail.title|| <Skeleton/>} </h3>
                  </div> 
                </Link>
    

            </div>
            )
        

        })
        }
        </div>}

    </div>
   );

   
}

export default ProjectList;




