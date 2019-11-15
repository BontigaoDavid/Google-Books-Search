import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <Jumbotron> <h1>(React) Google Books Search</h1> </Jumbotron>
        <Search/>
        <Saved/>
      </Router>
    );
  }
}

export default App;
