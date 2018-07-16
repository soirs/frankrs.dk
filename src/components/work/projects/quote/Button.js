// Button.js

import React from "react";
import "./Button.css"

const Button = ({ onClick, children }) => (
  <div className="quote__button-box">
    <button id="quote__button" className="" onClick={onClick}>
     {children}
    </button>
  </div>
)

export default Button;