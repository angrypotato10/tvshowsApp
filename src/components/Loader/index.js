import React from "react";
import loaderSrc from "../../assets/loader.gif";

const Loader = props => (
  <div>
    <img style={{ width: 45 }} src={loaderSrc} alt="Loader icon" />
  </div>
);

export default Loader;
