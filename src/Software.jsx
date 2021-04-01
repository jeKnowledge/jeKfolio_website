import ProjectData from "./projects.json";

export default function Software(){
 
    return (
      
      <div className="projects_area">
      { ProjectData.software.map(( softwareDetail ) => {
        return (
          
        <div className="project">
          <img src={softwareDetail.image} alt="Project"/>
          <h5>{softwareDetail.data}</h5>
          <h3>{softwareDetail.title} </h3>
        </div>

        )
       })}
      </div>
    
    )
}


