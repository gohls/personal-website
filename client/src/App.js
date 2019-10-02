import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import Home from "./components/Home";
import About from "./components/About";
import CSC from "./components/CSC";

// Text graphics source: https://www.kammerl.de/ascii/AsciiSignature.php
// Webpage easter egg
console.log(
  "+-+ +-+ +-+ +-+ +-+   +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+   +-+ +-+ +-+ +-+ \n" +
  "|S| |i| |m| |o| |n|   |A| |l| |e| |x| |a| |n| |d| |e| |r|   |G| |o| |h| |l| \n" +
  "+-+ +-+ +-+ +-+ +-+   +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+   +-+ +-+ +-+ +-+");

function App() {
  return (
    <Router>
      <div className="app">
        <MyNavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about-me" component={About} />
        <Route path="/cs-club" component={CSC} />
      </div>
    </Router>
  );
}

export default App;
