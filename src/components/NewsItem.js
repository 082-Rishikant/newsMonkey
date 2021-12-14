import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let defaultUrlforImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQctJwMVuFHhMpVSB2oaMh_2cofKr7gvGiXAA&usqp=CAU";
    let {title, description, imageUrl, newsUrl}=this.props;
    return (
      <div className="card my-2" style={{width: "18rem"}}>
        <img src={!imageUrl?defaultUrlforImage:imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title?title.slice(0, 30):""}...</h5>
            <p className="card-text">{description?description.slice(0,60):""}...</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
          </div>
      </div>
    )
  }
}

export default NewsItem
