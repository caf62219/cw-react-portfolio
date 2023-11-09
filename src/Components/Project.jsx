import React from "react";



export default function Project({article}) {
  return (
   <div className="col-md-4" key={article.id}>
    <div className="card zoom-card" key={article.id}>
      <div className="card-body" style={{height: '425px'}}>
        <h5 className="card-title text-center"><strong>{article.title}</strong></h5>
        <p className="card-text">{article.description}</p>
        <a href={article.repo} target="_blank" rel="noopener noreferrer" className="card-link glow-on-hover">Github Repo</a>
        <a href={article.website}>
        <img src={article.image} title={article.title} alt={article.title} className="card-img-bottom glow-on-hover" 
        height="200px" width="50px"/>
        </a>
      </div>
    </div>
<br></br>
   </div>
 )}

  