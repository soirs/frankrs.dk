// home.js

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => (
   <div className="home">
    <div className="home__message">
        <p>Hi there! I´m Frank.</p>
        <p>I'm a web developer and life enthusiast.</p>
        <p>Here´s my <Link className="underline" to="/Work">work</Link>.</p>
    </div>
   </div>
)

export default Home;