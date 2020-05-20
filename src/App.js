import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Container from "./Container";
import Jumbotron from "./Jumbotron";
import Row from "./Row";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={AboutMe}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/resume" component={Resume}/>
      </div>
      </Router>
    )
  }

}

export default App;
