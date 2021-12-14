import React, { Component } from 'react'
import NewsItem from './NewsItem'
import  Spinner  from './Spinner.js';

export class News extends Component {
  // #3 Second this Life Cycle Method will be called
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cace85dc86c047e88c4d8afd8c2bf5d9&page=1&&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }

  // #1 First This Constructor will be called
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  handlePrevious = async () => {
    if (this.state.page <= 1) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cace85dc86c047e88c4d8afd8c2bf5d9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading:false
      });
    }

  }
  handleNext = async () => {
    if (!((this.state.page + 1) > (Math.ceil(this.state.totalResults / this.props.pageSize)))) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=cace85dc86c047e88c4d8afd8c2bf5d9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading:false
      });
      console.log(this.state.page)
    }

  }

  // #2 This render method will be called
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
          {
            !this.state.loading && this.state.articles.map((item, id) => {
              return <div key={id} className="col-md-4">
                <NewsItem title={item["title"]} description={item["description"]} imageUrl={item["urlToImage"]} newsUrl={item.url} />
              </div>
            })
          }
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button disabled={this.state.page <= 1} className="btn btn-sm btn-dark" onClick={this.handlePrevious}>&#8249; Previous</button>
          <button disabled={(this.state.page + 1) > (Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-sm btn-dark" onClick={this.handleNext}>Next &#8250;</button>
        </div>
      </div>
    )
  }
}

export default News
