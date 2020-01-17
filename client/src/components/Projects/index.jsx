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
            image={project.image}
            title={project.title}
            intro={project.intro}
            description={project.description}
            tags={project.tags}
            _dir={project._dir}
          />
        )}
      </div>
    );
  }
}

export default MyProjects;