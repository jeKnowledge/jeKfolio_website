import ProjectData from "./projects.json";

const Software = () => {
  return ( 
    <div className="projects_area">
      { ProjectData.software.map(( softwareDetail ) => {
        return (
          
        <div className="project" key={softwareDetail.id}>

          <div className="project_img">
            <img src={ softwareDetail.cover}></img>
          </div>

        <div className="project_text">
          <h5>{softwareDetail.data}</h5>
          <h3>{softwareDetail.title} </h3>
        </div>

      </div>
      )})}
    </div>
   );
}

export default Software;



