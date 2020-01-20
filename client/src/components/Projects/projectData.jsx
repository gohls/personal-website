import VAClock from './projectDetails/hackTX.md'

// TODO: Fetch README doc from project repos for full description
const projectData = [
  //****************************
  //      VICINITY ALARM CLOCK 
  //****************************
  {
    image: "/images/v_clock.jpg",
    title: "Vicinity Alarm Clock",
    intro: "The Vicinity Alarm Clock is a home alarm clock that only sounds when you're at home (or technically your phone).",
    description: "This project is still in early phase of research and design. Check back soon!",
    tags: ["IoT", "RasberryPie", "Bluetooth", "Python"],
    highlight: true,
    _dir: VAClock,
  },
  //****************************
  //      SLACK goatBot  
  //**************************** 
  {
    image: "/images/goatBot.jpg",
    title: "Slack goatBot",
    intro: '"goatbot" is a Slackbot I made for the Computer Science Club Slack workspace. Get a straight yes or no via gif.',
    description: "",
    tags: ["Express", "Node", "API", "Crypto"],
    highlight: true,
    _dir: VAClock,
  },
  //****************************
  //      stEds CTF  
  //**************************** 
  {
    image: "/images/steds_ctf.png",
    title: "stEds CTF 2017",
    intro: "This course and certification was a great introduction to cyber security, which is a big personal interest.",
    description: "",
    tags: ["Security"],
    highlight: false,
    _dir: VAClock,
  },
  //****************************
  //      DATA JOURNAL 
  //**************************** 
  {
    image: "/images/data-viz.jpeg",
    title: "Data-Journaling",
    intro: "This web app aims at deeper self-awareness, via data collection, statistical caluculations, and data-viz graphs.",
    description: "",
    tags: ["React", "Express", "Cloud", "Docker", "Stats", "Data-Viz"],
    highlight: true,
    _dir: VAClock,
  },
  //****************************
  //      PERONSAL WEBSITE 
  //****************************
  {
    image: "/images/sg_white.png",
    title: "Personal Website",
    intro: "This course and certification was a great introduction to cyber security, which is a big personal interest.",
    description: "",
    tags: ["React", "Cloud", "Docker", "CI/CD"],
    highlight: false,
    _dir: VAClock,
  },
  //****************************
  //      HackTX 2018
  //****************************
  {
    image: "/images/HackTX_poster.jpg",
    title: "HackTX Capture the Flag",
    intro: "My team and I placed 7th out of 100+ teams contesting in the offical HackTX '18 Capture the Flag.",
    description: "",
    tags: ["7th Place", "RSA", "Reverse-Engineering", "Teamwork", "Cipher"],
    highlight: false,
    _dir: VAClock,
  }
];

export default projectData;