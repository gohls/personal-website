import React from 'react';
import MyCard from "../Card";
import MyProfileBanner from "../ProfileBanner";
import MyCountdown from "../Countdown";
import MyTrademark from "../Trademark";
import MySectionTitle from "../SectionTitle";
import MyEducation from "../Education"
import experienceData from "../Experience/experienceData"
import projectData from "../Projects/projectData"
import "./index.css";
import MyAboutMe from '../AboutMe';




export default class Home extends React.Component {
  render() {

    const experienceHighlights = experienceData.filter(exp => exp.highlight === true);
    const projectsHighlights = projectData.filter(project => project.highlight === true);

    return (
      <div>
        <MyProfileBanner
        />
        <MySectionTitle
          subDir={"/about_me"}
          curDir={" | less"}
        />
        <MyAboutMe />
        <MySectionTitle
          subDir={"/experience"}
          curDir={"/highlights"}
        />
        <div className="cards">
          {experienceHighlights.map(expHighlight =>
            <MyCard
              link={expHighlight.link}
              image={expHighlight.image}
              title={expHighlight.title}
              text={expHighlight.text}
              tags={expHighlight.tags}
            />
          )}

        </div>
        <MySectionTitle
          curDir={"/graduation"}
        />
        <MyCountdown />
        <MySectionTitle
          subDir={"/projects"}
          curDir={"/highlights"}
        />
        <div className="cards">
          {projectsHighlights.map(projectsHighlight =>
            <MyCard
              link={projectsHighlight.link}
              image={projectsHighlight.image}
              title={projectsHighlight.title}
              text={projectsHighlight.text}
              tags={projectsHighlight.tags}
            />
          )}
        </div>
        <MySectionTitle
          subDir={"/education"}
          curDir={"/overview"}
        />
        <MyEducation />

        <MyTrademark trademark="Simon Alexander Gohl .:. Fall 2019" />
      </div >
    );
  }
}
