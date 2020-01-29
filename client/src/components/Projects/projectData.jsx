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
    intro: "The Vicinity Alarm Clock is a home alarm clock that only sounds when you're at home - well, technically when your phone's at home.",
    tags: ["IoT", "Raspberry-Pi", "Bluetooth", "Display-Board", "Matrix-Panel"],
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
    intro: "Capture the Flag (CTF) is a friendly competition consisting of assorted CS challenges. We created and hosted a CTF for our school.",
    tags: ["CTF", "CS-Challenges", "Crypto", "Bash", "Forensics", "Networking"],
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
    tags: ["MERN", "DigitalOcean", "Docker", "Data-Viz", "bcrypt", "Nodemailer"],
    highlight: true,
    _dir: dataJournal,
  },
  //****************************
  //      PERONSAL WEBSITE 
  //****************************
  {
    image: "/images/sg_white.png",
    title: "Personal Website",
    intro: "My website - a personal portfolio, but also a playground to learn and try new stuff. More to come in my /🥼 directory.",
    tags: ["React", "Cloud", "Docker", "CI/CD", "Portfolio", "Playground"],
    highlight: false,
    _dir: website,
  },
  //****************************
  //      HackTX 2018
  //****************************
  {
    image: "/images/HackTX_poster.jpg",
    title: "HackTX Capture the Flag",
    intro: "We placed 7th out of 100+ teams contesting in the offical HackTX '18 Capture the Flag... not bad for first-timers.",
    tags: ["HackTX-18", "7th Place", "RSA", "Reverse-Engineering", "Teamwork", "Cipher"],
    highlight: false,
    _dir: hackTX,
  }
];

export default projectData;