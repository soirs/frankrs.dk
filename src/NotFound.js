// NotFound.js

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h3>Couldn't find what you were looking for :(</h3>
     <Link to="/" alt="Back to start">Let me get you back</Link>
  </div>
);

export default NotFound;