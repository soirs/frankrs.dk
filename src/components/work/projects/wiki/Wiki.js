// Wiki.js

import React from "react";
import "./Wiki.css";
// import WikiResult from "./WikiResult";
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
        // this.handleSubmit = this.handleSubmit.bind(this);
      }

      removeElementsByClassName = (className) => {
        var msgs = document.getElementsByClassName(className);
        while(msgs.length > 0){
              msgs[0].parentNode.removeChild(msgs[0]);
          }
      }
        

    fetchWiki = () => {
        let searchResults = document.getElementsByClassName('searchResults');

        this.removeElementsByClassName("wiki__result");
        let searchButton = document.getElementById('wikiSearchBtn');
        // let query = document.getElementById('wiki__textbox').value();
        let q = "";
        
        this.setState({search: ''});
        console.log(this.state.search);
        // console.log(searchButton);

        this.init();
        console.log(this.state.search);
        console.log("----");
        console.log(this.state.pages);

        
    }

    handleChange(event) {
        this.setState({search: event.target.value});
      }

      init() {
        let searchResults = document.getElementById('searchResults');

        const api = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=4&search=${this.state.search}&utf8=1&format=json`;
        
        fetch(api, {cache: "no-store"})
          .then(response => response.json())
          .then(data => {
            for(var i=0; i < data[1].length; i++){
                var li = document.createElement('li');
                li.className = "wiki__result";
                li.target = "_blank";
                console.log(data);

                li.innerHTML = 
                "<p class='wiki__result-spacing'><strong><a class='underline' href=" + data[3][i]+">" + data[1][i]+ "</a></strong><p>" + data[2][i] + "</p></p>";
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
		// let term = this.searchTerm.replace(' ', '_')
        let searchQuery = this.state.pages[0];
        // let title = this.state.pages[0];
        // let searchButton = document.getElementById('wikiSearchBtn');
        // let searchResults = document.getElementById('searchResults');

        
        //   let data = this.state.pages;
        //   let titles = this.state.pages[1];
        //    console.log(titles);
         
        let query = document.getElementById('wiki__textbox');

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
                placeholder={this.state.search}
                ref="filterTextInput"
                // onKeyDown = "if (event.keyCode == 13)document.getElementById('wiki__button').click()"
                value={this.state.search}
                onChange={this.handleChange}
              />
              <button id="wiki__button" type="button" className="wiki__button" onClick={this.fetchWiki}> Search </button>
        </form>
              
        </div>
            <ul id="searchResults">
               
              </ul>

            </div>
                
            </section>
        )
    }
}

export default Wiki;