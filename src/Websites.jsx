import ProjectData from "./projects.json";

export default function Websites(){
 
    return (
      
      <div className="projects_area">
      { ProjectData.websites.map(( websiteDetail ) => {
        return (
          
        <div className="project">
          <img src={websiteDetail.image} alt="Project"/>
          <h5>{websiteDetail.data}</h5>
          <h3>{websiteDetail.title} </h3>
        </div>

        )
       })}
      </div>
    
    )
}


