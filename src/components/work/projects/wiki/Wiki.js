// Wiki.js

import React from "react";
import "./Wiki.css";
import WikiResult from "./WikiResult";

class Wiki extends React.Component {
    state = {
        url2: 'https://en.wikipedia.org/w/api.php?action=query&gsrlimit=15&generator=search&origin=*&gsrsearch=Arsenal&format=json',
        url: `https://en.wikipedia.org/w/api.php?action=query&list=search&&origin=*&srsearch=$Arsenal&prop=info&inprop=url&utf8=&format=json`,
        pages: [],
        search: 'youre+beautiful',
        hello: '',
    };

    componentDidMount() {
        const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&&origin=*&srsearch=${this.state.search}&prop=info&inprop=url&utf8=&format=json`;

        fetch(apiUrl)
          .then(response => response.json())
          .then(data => this.storePages(data))
          .catch(error => console.log(error));
    }

      storePages = data => {
          const pages = data.query.search.map(result => {
              const {
                  title,                  
                  pageid,
                  wordcount,
                  snippet
              } = result;
              return { pageid, title, wordcount, snippet };
          });
          this.setState({ pages });
          console.log({pages});
          
      }

    

    render() {
        return(

            <section className="wiki">
            <div className="wikiHead">
                <h2>Wikipedia Searcher - link search</h2>
                <input
                type="text"
                placeholder="Search..."
                // value={this.props.filterText}
                ref="filterTextInput"
                // onChange={this.handleChange}
              />
            </div>

                <ul className="searchResults">
                {this.state.pages.map((page, index) => (
                  <WikiResult key={page.pageid} page={page} />
                ))}
              </ul>
            </section>
        )
    }
}

export default Wiki;