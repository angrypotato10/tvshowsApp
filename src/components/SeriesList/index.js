import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const SeriesListItem = ({ series }) => (
  <ListGroupItem tag="a" action>
    <Link to={`/series/${series.show.id}`}>{series.show.name}</Link>
  </ListGroupItem>
);

const SeriesList = props => {
  return (
    <div>
      <ListGroup>
        {props.list.map(series => (
          <SeriesListItem series={series} key={series.show.id} />
        ))}
      </ListGroup>
    </div>
  );
};

export default SeriesList;
