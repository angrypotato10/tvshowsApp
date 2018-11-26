import React from "react";
import { Switch, Route } from "react-router-dom";
import SingleSeries from "../../containers/SingleSeries";
import EntryPage from "../App/Jumbotron";

const Main = props => (
  <Switch>
    <Route exact path="/" component={EntryPage} />
    <Route path="/series/:id" component={SingleSeries} />
  </Switch>
);

export default Main;
