import ea from "./experienceDetails/ea.md"
import oit from "./experienceDetails/oit.md"
import csc from "./experienceDetails/csc.md"

// TODO: Changed intern file to lowercase
// test change
export const experienceData =
  [{
    image: "/images/ea.png",
    title: "EA SWE Intern",
    intro: "Summer '19 I got the exciting and unique opportunity to internship as Software Engineer at EA.",
    tags: ["PoC", "Rapid-Prototyping", "Innovations-Lab", "React", "Flask", "R", "Teamwork"],
    highlight: true,
    _dir: ea
  },
  {
    image: "/images/oit_goat.jpg",
    title: "OIT Digital Associate",
    intro: "Working at St. Eds Office of Technology as Digital Associate has laid a strong IT foundation.",
    tags: ["IT", "Bash-Scripts", "Problem-Solving", "Imaging", "UEFI-Config", "Salesforce-Desk"],
    highlight: true,
    _dir: oit
  },
  {
    image: "/images/csc.png",
    title: "CS Club President",
    intro: "As CS President I've had the privilege to lead and learn from a great CS community",
    tags: ["Leadership", "Networking", "CS-Community", "Knowledge-Transfer"],
    highlight: true,
    _dir: csc
  }
  ]

export default experienceData;
