// Header.js

import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
  <div className="who">

    <Link to="/" className="header__name">
      Frank Richard Semakula.
    </Link>
    <br/>
    <Link to="/Work">Work</Link>
    </div>
    <nav>
{/*<p className="favicon">F. | </p>
      <Link to="/Work">Work </Link>*/}
    </nav>
</header>

)

export default Header;
