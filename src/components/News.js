import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  // #3 Second this Life Cycle Method will be called
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=cace85dc86c047e88c4d8afd8c2bf5d9"
    let data=await fetch(url);
    let parsedData=await data.json();
    // console.log(parsedData);
    this.setState({articles:parsedData.articles});
  }

  // #1 First This Constructor will be called
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  // #2 This render method will be called
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top headlines</h1>
        <div className="row my-3">
          {
            this.state.articles.map((item, id)=>{
              return <div key={id} className="col-md-4">
                <NewsItem title={item["title"]} description={item["description"]} imageUrl={item["urlToImage"]} newsUrl={item.url}/>
              </div>
            })
          }
        </div>

      </div>
    )
  }
}

export default News
