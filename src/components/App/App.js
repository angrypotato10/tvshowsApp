import React, { Component } from "react";
import "./App.css";
import Main from "../Main";
import "whatwg-fetch";
import EntryPage from "./Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Main />
      </div>
    );
  }
}

export default App;
