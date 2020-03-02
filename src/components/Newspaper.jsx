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
    axios.get
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
