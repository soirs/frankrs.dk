// home.js

import React from "react";
import "./Home.css";
import "react-router-dom";

const Home = () => (
   <div className="home">

    <h2>Contact.</h2>

    <div className="contact">
            <a href="tel:+4540758775" class="phone contact-item" alt="phone number">
                <i class="far fa-mobile icon"></i>
                <span class="underline">40 75 87 75</span>
            </a>

            <a href="mailto:hire@frankrs.dk" class="mail contact-item">
                <i class="far fa-envelope icon"></i>
                <span class="underline">hire@frankrs.dk</span>
            </a>

            <a href="https://www.linkedin.com/in/frankrichardsemakula/" class="linkedin contact-item">
                <i class="fab fa-linkedin-in icon"></i>
                <span class="underline">LinkedIn</span>
            </a>
    </div>

    <div className="bio">
    <h2>Bio. - Print</h2>
        <p>Spartan web developer with taste for the minimalistic approach.</p>
        <p>Passion for frontend, tech, music and knowledge.</p>
    </div>
    <div className="edu">
        <h2>Education.</h2>
        <p>Web-Integrator // Viden Djurs</p>
        <p>Marketing Management // Business Academy Aarhus</p>
    </div>

    <div className="exp">
    <h2>Experience.</h2>
    <p>Intern // FirstAgenda</p>
    </div>

    <div className="frank">
    <h2>Private.</h2>
    <p>I love:</p>
    <p>My crimson bass, music, humans</p>
    </div>
   </div>
)

export default Home;