import React from 'react';
import MyCard from "../Card"
import projectData from "./projectData"
import "./index.css";

class MyProjects extends React.Component {
  render() {
    return (
      <div className="cards">
        {projectData.map(project =>
          <MyCard
            // link={project.link}
            image={project.image}
            title={project.title}
            intro={project.intro}
            tags={project.tags}
          />
        )}
      </div>
    );
  }
}

export default MyProjects;