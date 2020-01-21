import revionics from "./experienceDetails/revionics.md"
import ea from "./experienceDetails/ea.md"
import oit from "./experienceDetails/oit.md"

export const experienceData =
  [{
    image: "/images/revionics.png",
    title: "Revionics SWE Intern",
    intro: "Spring '20 - planned internship. Awaiting the experience, challanges, and unknowns!",
    tags: ["Python", "AI", "Tool", "Aigle Dev", "Teamwork", "MongoDB"],
    highlight: true,
    _dir: revionics
  },
  {
    image: "/images/ea.png",
    title: "EA SWE Intern",
    intro: "Summer '19 I got the exciting and unique opportunity to internship as Software Engineer at EA.",
    tags: ["React", "Flask", "R", "Teamwork", "Rapid Prototyping", "Innovations-Lab"],
    highlight: true,
    _dir: ea
  },
  {
    image: "/images/oit_goat1.jpg",
    title: "OIT Digital Associate",
    intro: "Working at St. Eds Office of Technology (OIT) as Digital Associate has given me an all-around IT knowledgebase.",
    tags: ["IT", "Bash", "ProblemSolving", "VirtualMachine"],
    highlight: true,
    _dir: oit
  },
  ]

export default experienceData;
