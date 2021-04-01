import ProjectData from "./projects.json";

export default function Design(){
 
    return (
      
      <div className="projects_area">
      { ProjectData.design.map(( designDetail ) => {
        return (
          
        <div className="project">
          <img src={designDetail.image} alt="Project"/>
          <h5>{designDetail.data}</h5>
          <h3>{designDetail.title} </h3>
        </div>

        )
       })}
      </div>
    )
}


