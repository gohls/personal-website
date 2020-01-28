import VAclock from './projectDetails/vicinityAlarmClock.md'
import dataJournal from './projectDetails/dataJournal.md'
import goatbot from './projectDetails/goatBot.md'
import hackTX from './projectDetails/hackTX.md'
import website from './projectDetails/personalWebsite.md'
import stedsCTF from './projectDetails/stedsCTF.md'

// TODO: Fetch README doc from project repos for full description
const projectData = [
  //****************************
  //      VICINITY ALARM CLOCK 
  //****************************
  {
    image: "/images/v_clock.jpg",
    title: "Vicinity Alarm Clock",
    intro: "The Vicinity Alarm Clock is a home alarm clock that only sounds when you're at home (or technically your phone).",
    tags: ["IoT", "RasberryPie", "Bluetooth", "Display-Board", "Matrix-Panel", "Python"],
    highlight: true,
    _dir: VAclock,
  },
  //****************************
  //      SLACK goatBot  
  //**************************** 
  {
    image: "/images/goatBot.jpg",
    title: "Slack goatBot",
    intro: '"goatBot" is a Slackbot I made for the CS-Club Slack workspace. Ask a question and get a straight yes or no answer via gif.',
    tags: ["Slackbot", "Express", "Heroku", "API-Key", "CS-Club"],
    highlight: true,
    _dir: goatbot,
  },
  //****************************
  //      stEds CTF  
  //**************************** 
  {
    image: "/images/steds_ctf.png",
    title: "stEds CTF 2017",
    intro: "This course and certification was a great introduction to cyber security, which is a big personal interest.",
    tags: ["Security"],
    highlight: false,
    _dir: stedsCTF,
  },
  //****************************
  //      DATA JOURNAL 
  //**************************** 
  {
    image: "/images/data-viz.jpeg",
    title: "DataTrace",
    intro: "This web app is a multi-dimensional approach to self-awareness, utilizing data visualization and statistical models.",
    tags: ["MERN", "DigitalOcean", "Docker", "Data-Viz", "bcrypt", "Nodemailer", "Material-UI"],
    highlight: true,
    _dir: dataJournal,
  },
  //****************************
  //      PERONSAL WEBSITE 
  //****************************
  {
    image: "/images/sg_white.png",
    title: "Personal Website",
    intro: "My personal portfolio website - developed to highlight qualification per its contents and developement itself.",
    tags: ["React", "Cloud", "Docker", "CI/CD"],
    highlight: false,
    _dir: website,
  },
  //****************************
  //      HackTX 2018
  //****************************
  {
    image: "/images/HackTX_poster.jpg",
    title: "HackTX Capture the Flag",
    intro: "My team and I placed 7th out of 100+ teams contesting in the offical HackTX '18 Capture the Flag.",
    tags: ["HackTX-18", "7th Place", "RSA", "Reverse-Engineering", "Teamwork", "Cipher"],
    highlight: false,
    _dir: hackTX,
  }
];

export default projectData;