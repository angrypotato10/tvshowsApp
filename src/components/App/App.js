import React, { Component } from "react";
import "./App.css";
import Main from "../Main";
import "whatwg-fetch";

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
