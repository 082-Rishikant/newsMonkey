import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  // Function to Capitalize the passed string
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // #1 First This Constructor will be called
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults:0
    }
    document.title = `MonkeyNews - ${this.capitalize(this.props.category)}`;
  }

  // #3 Second this Life Cycle Method will be called
  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cace85dc86c047e88c4d8afd8c2bf5d9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cace85dc86c047e88c4d8afd8c2bf5d9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  }

  // #2 This render method will be called
  render() {
    return (
      <>
        <h1 className='text-center my-3'>NewsMonkey - Top {this.capitalize(this.props.category)} headlines</h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((item, id) => {
                return <div key={id} className="col-md-4">
                  <NewsItem title={item.title?item.title:""} description={item.description?item.description:""} imageUrl={item["urlToImage"]} newsUrl={item.url} author={item.author} date={item.publishedAt} source={item.source.name} />
                </div>
              })
              }
            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  }
}

export default News
