// Quote.js

import React, { Fragment } from "react";
import "./Quote.css";


class Quote extends React.Component {
    state = {
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        quote: [],
        hasQuote: false
    };

    componentWillMount() {
        fetch(this.state.url)
          .then(response => response.json())
        //   .then(data => this.setState({quote: data[0], hasQuote: true}))
          .then(data => this.storeQuote(data))
          .catch(error => console.log("Error: " + error));
    }

    // getRandomQuote = event => {
    //     fetch(this.state.url)
    //       .then(response => response.json())
    //       .then(data => {
    //           let { quote } = this.state;
    //           let quoteData = data[0];
    //           quote.content = quoteData.content;
    //           quote.link = quoteData.link;
    //           quote.title = quoteData.title;
    //           this.setState({ quote }, () => {
    //               if(this.state.hasQuote === false) {
    //                   this.setState({ hasQuote: true })
    //               }
    //           })
    //       })
    //       .catch(error => console.log(error));
    // }

    storeQuote = data => {
        const quote = data.map( result => {
            const { ID, title, content, link } = result[0];
            return { ID, title, content, link };
        });
        this.setState({quote});
        console.log({quote});
    }

    renderQuote = () => {
        const { content, link, title  } = this.state.quote;
        
        return (
            {title}
        )
    }

    render() {
        const {
            ID,
            title,
            content,
            link
        } = this.state.quote;
        // const result = render.map();

        console.log('This is data: ' + this.state.quote);
        const { hasQuote } = this.state;
        
        return(
            <div>
            <h2>Quotes on Design</h2>
            {
                
                <div>
                    <p>{this.state.title}</p>
                </div>
            }
            </div>
        )

}
}

export default Quote;