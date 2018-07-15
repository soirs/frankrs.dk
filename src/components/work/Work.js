// Work.js

import React from 'react';
import './Work.css';
// import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";


const Work = () => (
    <div>
    <h3>My work.</h3>
        <div className="work">
            <div className="project quote">
            <h2 className="underline">
                <Link className="underline" to="./Quote">Quote Generator</Link>
                </h2>
                <p>Ressources:</p>
                <p>API: </p>                
            </div>

            <br/>

            <div className="project wiki">
                <Link to="./Wiki">Wiki</Link>
                <p>Ressources:</p>
                <p>API: </p>      
            </div>
            
        </div>
        </div>
)

export default Work;
