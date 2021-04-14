import ProjectData from "./projects.json";

const Websites = () => {
  return ( 
    <div className="projects_area">

        
    { ProjectData.websites.map(( websiteDetail ) => {
      return (
        <div className="project" key={websiteDetail.id}>
          <div className="project_img">
            <img src={ websiteDetail.cover}></img>
          </div>

        <div className="project_text">
          <h5>{websiteDetail.data}</h5>
          <h3>{websiteDetail.title} </h3>
        </div>

      </div>
      )})}
    </div>
   );
}

export default Websites;




