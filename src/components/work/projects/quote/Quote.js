// Quote.js

import React from "react";
import "./Quote.css";
import Button from './Button';


class Quote extends React.Component {
    state = {
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        quote: [{
            ID: 2177,
content: "<p>Minimalism is not a lack of something. It’s simply the perfect amount of something.</p>",
link: "https://quotesondesign.com/nicholas-burroughs-3/",
title: "Nicholas Burroughs"
        }],
        // hasQuote: false
    };

    componentWillMount() {
        // this.getNewQuote(this.state.quote)

    //     fetch(this.state.url)
    //       .then(response => response.json())
    //       .then(data => this.storeQuote(data))
    //       .catch(error => console.log(error));
    }

    componentDidMount() {
        // this.getNewQuote(this.state.quote)


    }

    storeQuote = data => {
        let quote = data.map( result => {
            let { ID, title, content, link } = result;
            return { ID, title, content, link };
        });
        this.setState({quote});
        console.log({quote});
    }

    getNewQuote = (quote) => {
        fetch(this.state.url)
          .then(response => response.json())
          .then(data => this.storeQuote(data))
          .catch(error => console.log(error));
    }

    render() {
        // const {
        //     ID,
        //     title,
        //     content,
        //     link
        // } = this.state.quote;
        //  const result = render.map();

        // const { hasQuote } = this.state;
        return(
            <div>
            <h2>Quote Generator</h2>
            {
                <div>
                {this.state.quote.map((quote) => (
                    <div className="quote" key={quote.ID}>

                    <div className="quote__box">

                        <p className="quote__text" dangerouslySetInnerHTML={{ __html: quote.content.split(".").join(".</br>") }}>
                        </p>

                        <p className="quote__author">
                         - {quote.title}
                        </p>
                        <br/>
                        <Button onClick={this.getNewQuote}>Get a new quote</Button>
                        </div>
                    </div>

                ))}
   
            {/*<Button onClick={getNewQuote}></Button>*/}

                    <p>{this.state.quote.ID}</p>
                    <p>{this.state.content}</p>
                </div>
            }
            </div>
        )

}
}

export default Quote;