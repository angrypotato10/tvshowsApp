import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "../App/App";
import SingleSeries from "../../containers/SingleSeries";
import Series from "../../containers/Series";
import EntryPage from "../App/Jumbotron";

const Main = props => (
  <Switch>
    <Route exact path="/" component={EntryPage} />
    <Route path="/series/:id" component={SingleSeries} />
    <Route path="/search" component={Series} />
  </Switch>
);

export default Main;
