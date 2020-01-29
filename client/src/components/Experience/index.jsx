import React from 'react';
import MyCard from "../Card"
import experienceData from "./experienceData"
import "./index.css";

class MyExperience extends React.Component {

  // Workaround to start at top of page (especially on mobile)
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="cards">
        {experienceData.map(experience =>
          <MyCard
            image={experience.image}
            title={experience.title}
            intro={experience.intro}
            tags={experience.tags}
            _dir={experience._dir}
          />
        )}
      </div>
    );
  }
}

export default MyExperience;