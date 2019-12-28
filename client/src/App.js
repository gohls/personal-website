import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import MyNavBar from "./components/NavBar"
import Home from "./components/Home"
import MyAboutMe from "./components/AboutMe"
import MyEducation from "./components/Education"
import MyExperience from "./components/Experience"
import MyProjects from "./components/Projects"
import "./App.css"

// Text graphics source: https://www.kammerl.de/ascii/AsciiSignature.php
// Webpage easter egg
console.log(
  "+-+ +-+ +-+ +-+ +-+   +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+   +-+ +-+ +-+ +-+ \n" +
    "|S| |i| |m| |o| |n|   |A| |l| |e| |x| |a| |n| |d| |e| |r|   |G| |o| |h| |l| \n" +
    "+-+ +-+ +-+ +-+ +-+   +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+   +-+ +-+ +-+ +-+"
)

function App() {
  return (
    <Router>
      <div className='app'>
        <MyNavBar />
        <Route exact path='/' component={Home} />
        <Route path='/about-me' component={MyAboutMe} />
        <Route path='/experience' component={MyExperience} />
        <Route path='/projects' component={MyProjects} />
      </div>
    </Router>
  )
}

export default App
