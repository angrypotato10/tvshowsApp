import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

const EntryPage = props => {
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
          <Link to="/search">
            <Button color="info">Start Searching!</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default EntryPage;
