import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Helmet} from "react-helmet";
import './App.css';

import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Bio from "./components/bio/Bio";
import Header from "./components/header/Header";
import Work from "./components/work/Work";

// Projects
import Wiki from "./components/work/projects/wiki/Wiki";
import Quote from "./components/work/projects/quote/Quote";

const App = () => {
    return (
      
      <BrowserRouter>
        <div className="App">

        <Helmet>
        <meta charSet="utf-8" />
        <title>Mum told me I was dynamic</title>
        <link rel="canonical" href="https://frankrs.dk" />

        <script defer src="https://pro.fontawesome.com/releases/v5.0.11/js/all.js" integrity="sha384-rAGYBPVpurUH2YLc/Skiv4TE1iQ/wAocPQdQT73UR0LEZ3Os2E3wGBn9fRISQJIK" crossorigin="anonymous"></script>
        </Helmet>

          <Header />
          <Navigation/>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Work' component={Work}/>

            <Route exact path='/Wiki' component={Wiki}/>
            <Route exact path='/Quote' component={Quote}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }

  // class Head extends React.Component {
  //   render () {
  //     return (
  //         <div className="head">
  //             <Helmet>
  //                 <meta charSet="utf-8" />
  //                 <title>Mum told me I was dynamic</title>
  //                 <link rel="canonical" href="https://frankrs.dk" />

  //                 <script defer src="https://pro.fontawesome.com/releases/v5.0.11/js/all.js" integrity="sha384-rAGYBPVpurUH2YLc/Skiv4TE1iQ/wAocPQdQT73UR0LEZ3Os2E3wGBn9fRISQJIK" crossorigin="anonymous"></script>
  //             </Helmet>
  //         </div>
  //     );
  //   }
  // };


export default App;
