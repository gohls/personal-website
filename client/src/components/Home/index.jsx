import React from 'react';
import MyCard from "../MyCard";
import MyProfileBanner from "../MyProfileBanner";
import MyCountdown from "../MyCountdown";
import MyTrademark from "../MyTrademark";
import MySectionTitle from "../MySectionTitle";
import MyEducation from "../Education"
import "./index.css";

const sectionHeaders = {
  projects: "/highlights",
  profile: "Overview:",
}
// const me = "/images/me.jpg";

// experience array
const experience = [{
  link: "/revionics",
  image: "/images/revionics1.png",
  title: "Revionics SWE Intern",
  text: "Summer 2019 I got the exciting and unique opportunity to internship as Software Engineer at EA.",
},
{
  link: "/ea-intern",
  image: "/images/ea.png",
  title: "EA SWE Intern",
  text: "I'm taking over as Computer Science Club President at St. Edward's. Look out for fun events and projects!",
},
{
  link: "/cert",
  image: "/images/oit_goat1.jpg",
  title: "OIT Student Worker",
  text: "This course and certification was a great introduction to cyber security, which is a big personal interest.",
},
  // {
  //   image: "/images/space.jpeg",
  //   title: "HackTX Capture the Flag",
  //   text: "My team and I placed 7th out of 100+ teams contesting in the offical HackTX '18 Capture the Flag.",
  // }
];

// projects array
const projects = [{
  link: "/ea-intern",
  image: "/images/v_clock.jpg",
  title: "Vicinity Alarm Clock",
  text: "Summer 2019 I got the exciting and unique opportunity to internship as Software Engineer at EA.",
},
{
  link: "/csc",
  image: "/images/goatBot.jpg",
  title: "Slack goatBot",
  text: '"goatbot" is a Slackbot I made for the Computer Science Club Slack workspace. Get a straight yes or no via gif.',
},
{
  link: "/cert",
  image: "/images/steds_ctf.png",
  title: "stEds CTF 2017",
  text: "This course and certification was a great introduction to cyber security, which is a big personal interest.",
}
];


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <MyProfileBanner
        />
        <MySectionTitle
          subDir={"/experience"}
          curDir={"/highlights"}
        />
        <div className="cards">
          {experience.map(card =>
            <MyCard
              link={card.link}
              image={card.image}
              cardTitle={card.title}
              cardText={card.text}
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
          {projects.map(card =>
            <MyCard
              link={card.link}
              image={card.image}
              cardTitle={card.title}
              cardText={card.text}
            />
          )}
        </div>
        <MySectionTitle
          subDir={"/education"}
          curDir={"/overview"}
        />
        <MyEducation />
        <MySectionTitle
          // subDir={""}
          curDir={"/about_me"}
        />
        <MyTrademark trademark="Simon Alexander Gohl .:. Fall 2019" />
      </div >
    );
  }
}
