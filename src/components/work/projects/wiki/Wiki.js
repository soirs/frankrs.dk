// Wiki.js

import React from "react";
import "./Wiki.css";
import { Link } from "react-router-dom";
import imgWikipedia from "./gfx/wikipedia.png";

class Wiki extends React.Component {
    state = {
        pages: [],
        search: 'minimalism',
    };
    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({search: event.target.value});

        console.log("sxx   " + event.target.value)
      }
        handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.search);
        event.preventDefault();
        this.init();
      }
      // Needed to empty the un-ordered list. Otherwise would it append all the new elements - not replace
      removeElementsByClassName = (className) => {
        var msgs = document.getElementsByClassName(className);
        while(msgs.length > 0){
              msgs[0].parentNode.removeChild(msgs[0]);
          }
      }
        

    fetchWiki = () => {

        this.removeElementsByClassName("wiki__result");
        
        // this.setState({search: ''});
        // console.log(this.state.search);
        // console.log(searchButton);

        this.init();
    }

      init() {
        this.removeElementsByClassName("wiki__result");
        let searchResults = document.getElementById('searchResults');
        let api = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=4&search=${this.state.search}&utf8=1&format=json`;

        // Displays "Empty String" page if no input in textbox
        let empty = 'Empty String';
        if (this.state.search.length <= 0) {
          this.setState({search: empty});
          api = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=4&search=${empty}&utf8=1&format=json`
        } 

        fetch(api, {cache: "no-store"})
          .then(response => response.json())
          .then(data => {
            for(var i=0; i < data[1].length; i++){
                var li = document.createElement('li');
                li.className = "wiki__result";
                console.log(data);

                li.innerHTML = 
                "<p class='wiki__result-spacing'><strong><a class='underline' href=" + data[3][i]+" target='_blank'>" + data[1][i]+ "</a></strong><p>" + data[2][i] + "</p></p>";
                searchResults.appendChild(li);
            }
          })
          .catch(error => console.log(error));
      }

    componentDidMount() {
        this.setState({search: ''});

        this.init();
        }

    render() {
        return(

            <section className="wiki">
            <h3>
            <Link to="/work" className="header__name">Work </Link>
            > Wikipedia Lookup
            </h3>
        <div className="wikipedia">

        <img className="wiki__img" src={imgWikipedia} alt=""/>

        <div id="wiki__search">
        <form onSubmit={this.handleSubmit}>
                <input
                type="text"
                id="wiki__textbox"
                // placeholder={this.state.search}
                ref="filterTextInput"
                value={this.state.search}
                onChange={this.handleChange}
              />
              <button id="wiki__button" type="button" className="wiki__button" onClick={this.fetchWiki}> Search </button>
        </form>
              
        <p>You are now looking for: <i>{this.state.search}</i> </p>

        </div>
            <ul id="searchResults"></ul>

            </div>
                
            </section>
        )
    }
}

export default Wiki;