import React from 'react';
import { Link } from "react-router-dom"
import MyCard from "../Card";
import GreetingBanner from "../GreetingBanner";
import MyCountdown from "../Countdown";
import SectionTitle from "../SectionTitle";
import MyEducation from "../Education"
import experienceData from "../Experience/experienceData"
import projectData from "../Projects/projectData"
import "./index.css";
import MyAboutMe from '../AboutMe';
import MyCopyright from '../Copyright';


export default class Home extends React.Component {
  render() {

    const experienceHighlights = experienceData.filter(exp => exp.highlight === true);
    const highlights = projectData.filter(project => project.highlight === true);

    return (
      <div>
        <GreetingBanner
        />

        <MyAboutMe />
        <SectionTitle
          subDir={"/experience"}
          curDir={"/highlights"}
        />
        <div className="cards">
          {experienceHighlights.map(highlight =>
            <MyCard
              image={highlight.image}
              title={highlight.title}
              intro={highlight.intro}
              description={highlight.description}
              tags={highlight.tags}
              _dir={highlight._dir}
            />
          )}

        </div>
        <SectionTitle
          curDir={"/graduation"}
        />
        <MyCountdown />
        <SectionTitle
          subDir={"/projects"}
          curDir={"/highlights"}
        />
        <div className="cards">
          {highlights.map(highlight =>
            <MyCard
              image={highlight.image}
              title={highlight.title}
              intro={highlight.intro}
              description={highlight.description}
              tags={highlight.tags}
              _dir={highlight._dir}
            />
          )}
        </div>
        <SectionTitle
          // subDir={"/education+qualification"}
          curDir={"/education+skills"}
        />
        <MyEducation />

        <MyCopyright trademark="Simon Alexander Gohl .:. Spring 2020" />
      </div >
    );
  }
}
