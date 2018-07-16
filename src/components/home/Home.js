// home.js

import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Welcome extends React.Component {	
    render () {
        let time = "";
        var today = new Date()
        var currentHour = today.getHours()

        if (currentHour < 12) {
            console.log('good morning')
            time = "morning";
            } 
        else if (currentHour < 18) {
            console.log('good afternoon')
            time = "afternoon";
        }
        else {
            console.log('good evening')
            time = "evening";
    }
        return (
            <p className="home__message-time">
            Lovely {time},
            </p>

        )
    }
}

const Home = () => (
   <div className="home">
    <div className="home__message">
    <p><Welcome/>
    </p>
        <p>Hi there! I´m Frank.</p>
        <p>I'm a web developer and life enthusiast.</p>
        <p>Here´s my <Link className="underline" to="/Work">work</Link>.</p>
    </div>
   </div>
)

export default Home;