import React from 'react';
import MyCard from "../Card"
import experienceData from "./experienceData"
import "./index.css";

class MyExperience extends React.Component {
  render() {
    return (
      <div className="cards">
        {experienceData.map(experience =>
          <MyCard
            image={experience.image}
            title={experience.title}
            intro={experience.intro}
            description={experience.description}
            tags={experience.tags}
          />
        )}
      </div>
    );
  }
}

export default MyExperience;