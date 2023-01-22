import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    //the following line explains the concept of destructuring 
    let {title,description,imageUrl,newsurl,author,date,source} = this.props;
    return (
      <div className="my-3">
        {/* making the style a javascript object */}
        <div className="card">


        <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
        {/* <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "10%",zIndex: "1"}}> 
            {source}</span> */}
         <span className="badge rounded-pill bg-danger"> 
            {source}</span>
        </div>




        <img src={imageUrl?imageUrl:"https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41588-022-01275-w/MediaObjects/41588_2022_1275_Fig1_HTML.png"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {/* <p className="card-text">{description}...</p> */}
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer"href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem




/*

**** in the console ****
a="2020-04-27T11:41:47Z"
'2020-04-27T11:41:47Z'
d=new Date(a)
Mon Apr 27 2020 17:11:47 GMT+0530 (India Standard Time)
d.getDate
ƒ getDate() { [native code] }
d.getDate()
27
d.getDay()
1
d.getTime()
1587987707000
 */
