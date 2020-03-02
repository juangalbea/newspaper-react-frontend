import React, { Component } from 'react'
import axios from 'axios';
import './Newspaper.css';

export class Newspaper extends Component {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  getTheDate = (date) => {
    return date.getFullYear();
  }

  componentDidMount() {
    axios.get('http://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2020-02-29&' +
    
    'apiKey=2ccceac96c8841c88c0ecd7247f611d9')
      .then(response => {
        this.setState({ news: response.data.articles })
      })
  }

  render() {
    console.log(this.state.news)
    return (
      <div className="newspaper">

        {/* <h1>{this.state.news.articles[0].title}</h1> */}
        {this.state.news.map(article => {
          return (
            <div className="newCard">
              <img src={article.urlToImage} alt="" />
              <p>{article.publishedAt}</p>
              <p>{article.title}</p>
            </div>

          )
        })}
      </div>
    )
  }
}

export default Newspaper
