import React from "react";
import './App.css';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "./body/about/About";
import Experience from "./body/experience/Experience";
import Skill from "./body/skills/Skill";
import Project from "./body/projects/Project";
import Contact from "./body/contacts/Contact";


function App() {
  return (
      <div className="App">

          <Router>
              <Header/>

              <Route exact path="/" component={About}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/experience" component={Experience}/>
              <Route exact path="/skill" component={Skill}/>
              <Route exact path="/project" component={Project}/>
              <Route exact path="/contact" component={Contact}/>


          </Router>
          <Footer/>
      </div>
  );
}

export default App;

