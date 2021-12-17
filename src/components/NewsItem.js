import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let defaultUrlforImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQctJwMVuFHhMpVSB2oaMh_2cofKr7gvGiXAA&usqp=CAU";
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="card my-2">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '50%' }}>{source}</span>
        <img src={imageUrl?imageUrl:defaultUrlforImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className='card-text'><small className='text-muted'>By {author ? author : "Unkown"} on {date ? new Date(date).toGMTString() : "..."}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
