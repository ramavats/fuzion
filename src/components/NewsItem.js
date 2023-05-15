import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className='my-3' >
        <div className="card" >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{left: '85%', zIndex: '1'}}>
            {source}
  </span></h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author? "Unknown" : author} on {new Date(date).toLocaleString()}</small></p>
              <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read More...</a>
            
        </div>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem