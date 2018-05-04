// Bio.js

import React from "react";
import "./Bio.css";
import { Link } from "react-router-dom";

const Bio = () => (
    <div className="bio">
        <h3>Hi</h3>
        <p>I am a web developer with interest ranging from music to history.</p>
        <Link to="/Work">Codepen</Link>        
    </div>
)

export default Bio;