import ProjectData from "./projects.json";

const Design = () => {
  return ( 
    <div className="projects_area">
    { ProjectData.design.map(( designDetail ) => {
      return (
      <div className="project" key={designDetail.id}>
        
        <div className="project_img">
          <img src={ designDetail.cover}></img>
        </div>

        <div className="project_text">
          <h5>{designDetail.data}</h5>
          <h3>{designDetail.title} </h3>
        </div>

      </div>
      )})}
    </div>
   );
}

export default Design;




