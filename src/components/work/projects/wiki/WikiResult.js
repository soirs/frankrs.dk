// WikiResult.js

import React from "react";
import "./WikiResult.css";

const WikiResult = ({ page }) => {
    const { pageid, title, snippet } = page;
    const text = snippet.substring(0, 200) + "...";
    const url = `https://en.wikipedia.org/?curid=${pageid}`;
    
    return (
      <li className="pageResult">
        <a href={url} target="_blank">
        <h3>{title}</h3>
        </a>
        <p>
            {text}
        </p>
        <a href={url} target="_blank"> Read More</a>
      </li>
    );
  };
  
  export default WikiResult;