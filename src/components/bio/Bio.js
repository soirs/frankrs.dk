// Bio.js

import React from "react";
import "./Bio.css";
import { Link } from "react-router-dom";

const Bio = () => (
    <div className="bio">
    <br/><br/><br/>
    <ul className="contact__info">
      <li className="contact write">
       <a href="mailto:hire@frankrs.dk" className="write__link">
        <p>
        write. <i class="far fa-envelope icon"></i>

          <br/>
          hire@frankrs.dk</p>
       </a>

      </li>
      <li className="contact call">
        <a href="tel:+4540758775" className="call__link">
        <p>call. <i class="far fa-mobile icon"></i>
          <br/>
          40758775
        </p>
        </a>
      </li>

      <li className="contact meet">
        <p>meet.<i class="far fa-home icon"></i>
          <br/>
          Aarhus, DK
        </p>
      </li>
    </ul>


    <br/><br/><br/>

    
    <p>Bio. - Print</p>
        <p>Spartan web developer with taste for the minimalistic approach.</p>
        <p>Passion for frontend, tech, music and knowledge.</p>
    </div>
    <div className="edu">
    <p>Education.</p>
        <p>Web-Integrator // Viden Djurs</p>
        <p>Marketing Management // Business Academy Aarhus</p>
    </div>

    <div className="exp">
    <p>Experience.</p>
    <p>Intern // FirstAgenda</p>
    </div>

    <div className="frank">
    <p>Private.</p>
    <p>I love:</p>
    <p>My crimson bass, music, fellow human beings</p>
    </div>
)

export default Bio;