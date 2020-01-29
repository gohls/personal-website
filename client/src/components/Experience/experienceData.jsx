import revionics from "./experienceDetails/revionics.md"
import ea from "./experienceDetails/ea.md"
import oit from "./experienceDetails/oit.md"

export const experienceData =
  [{
    image: "/images/intern.jpg",
    title: "Prospective SWE Intern",
    intro: "Spring '20 - prospective internship. Awaiting the experience, challanges, and unknowns!",
    tags: ["Experience", "Challenges", "Unknowns", "Teamwork", "SWE", "Learning", "Opportunity"],
    highlight: true,
    _dir: revionics
  },
  {
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
  ]

export default experienceData;
