import React from 'react';
import MyCard from "../MyCard";
import MyProfileBanner from "../MyProfileBanner";
import MyCountdown from "../MyCountdown";
import MyTrademark from "../MyTrademark";
import MySectionTitle from "../MySectionTitle";
import "./index.css";

const sectionHeaders = {
  projects: "/highlights",
  profile: "Overview:",
}
// const me = "/images/me.jpg";

// Cards array
const cards = [{
  link: "/ea-intern",
  image: "/images/ea_image.jpg",
  title: "EA SWE Internship",
  text: "Summer 2019 I got the exciting and unique opportunity to internship as Software Engineer at EA.",
},
{
  link: "/csc",
  image: "/images/space.jpeg",
  title: "Computer Science Club",
  text: "I'm taking over as Computer Science Club President at St. Edward's. Look out for fun events and projects!",
},
{
  link: "/cert",
  image: "/images/space.jpeg",
  title: "Junior Pen Tester Cert",
  text: "This course and certification was a great introduction to cyber security, which is a big personal interest.",
},
  // {
  //   image: "/images/space.jpeg",
  //   title: "HackTX Capture the Flag",
  //   text: "My team and I placed 7th out of 100+ teams contesting in the offical HackTX '18 Capture the Flag.",
  // }
];


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <MyProfileBanner
        />
        <div className="center-cards">
          {cards.map(card =>
            <MyCard
              link={card.link}
              image={card.image}
              cardTitle={card.title}
              cardText={card.text}
            />
          )}
        </div>
        <MyCountdown />
        <MySectionTitle
          title={sectionHeaders.profile}
        />
        <MyTrademark trademark="Simon Alexander Gohl .:. Fall 2019" />
      </div>
    );
  }
}
