import React,{useState} from 'react';


import { Button,Container,Navbar,Nav} from 'react-bootstrap';
import './common.css'

function MovieCard(props) {

  

  return (
    // <div className="cards-area" >

<div className="card" style={{width: "18rem"}}>
  {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg> */}
  <img className="bd-placeholder-img card-img-top" width="100%" height="180"  src={"https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"}/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
{/* </div> */}


 
  

   
    </div>
  );
}

export default MovieCard;
