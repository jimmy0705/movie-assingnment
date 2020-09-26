import React,{useState} from 'react';


import { Button,Container,Navbar,Nav} from 'react-bootstrap';
import './common.css'

function MovieCard(props) {
 // console.log(props)
  const {movies}=props
  

  return (
    // <div className="cards-area" >

<div className="card" style={{width: "18rem"}}>
  {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg> */}
  <img className="bd-placeholder-img card-img-top" width="100%" height="180"  src={movies.Poster}/>
  <div className="card-body">
    <h5 className="card-title">{movies.Title}</h5>
  <p className="card-text">{movies.Year}</p>
    <a href="#" className="btn btn-primary">Add Favourite</a>
  </div>
{/* </div> */}


 
  

   
    </div>
  );
}

export default MovieCard;
