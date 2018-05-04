// Work.js

import React from 'react';
import './Work.css';
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";


const Work = () => (
    <div>

        <h2>My work.</h2>
        
        <div className="work">
            <div className="project wiki">
                <Link to="./Wiki">Wiki</Link>
                <p>Ressources:</p>
                <p>API: </p>      
            </div>
            <div className="project quote">
                <Link to="./Quote">Quote</Link>
                <p>Ressources:</p>
                <p>API: </p>                
            </div>
        </div>
    </div>
)

export default Work;
