import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Helmet} from "react-helmet";
import './App.css';

import Home from "./components/home/Home";
// import Navigation from "./components/navigation/Navigation";
import Header from "./components/header/Header";
import About from "./components/about/About";

import Work from "./components/work/Work";
// Projects
import Wiki from "./components/work/projects/wiki/Wiki";
import Quote from "./components/work/projects/quote/Quote";

// CSS
import './css/document.css';
// import './css/normalize.css';


const App = () => {
    return (
      
      <BrowserRouter>
        <div className="wrapper">
          <div className="App">

            <div className="header">
              <Header />
            </div>
            <div className="content">
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/About' component={About}/>
                <Route exact path='/Work' component={Work}/>
                  <Route exact path='/Wiki' component={Wiki}/>
                  <Route exact path='/Quote' component={Quote}/>
              </Switch>
            </div>

            <Helmet>
            <meta charSet="utf-8" />
            <title>Frank Richard Semakula | Portfolio</title>
            <link rel="canonical" href="https://frankrs.dk" />
    
            <script defer src="https://pro.fontawesome.com/releases/v5.0.11/js/all.js" integrity="sha384-rAGYBPVpurUH2YLc/Skiv4TE1iQ/wAocPQdQT73UR0LEZ3Os2E3wGBn9fRISQJIK" crossorigin="anonymous"></script>
            </Helmet>

          </div>
        </div>
      </BrowserRouter>
    );
  }


export default App;
