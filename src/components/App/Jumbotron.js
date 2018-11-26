import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import Series from "../../containers/Series";

class EntryPage extends Component {
  state = { isBtnClicked: false };

  handleClick = () => {
    this.setState({ isBtnClicked: true });
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">TV Series List!</h1>
          <p className="lead">
            This is a simple website for checking out ratings of TV Shows.
          </p>
          <hr className="my-2" />
          <p>It uses TV Maze api.</p>
          <p className="lead">
            <Button onClick={this.handleClick} color="info">
              Start Searching!
            </Button>
          </p>
        </Jumbotron>
        {this.state.isBtnClicked ? <Series /> : null}
      </div>
    );
  }
}

export default EntryPage;
