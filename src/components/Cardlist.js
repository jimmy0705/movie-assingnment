import React,{useState,useEffect} from 'react';


//import { Button,Container,Navbar,Nav} from 'react-bootstrap';
import './common.css'

function MovieCard(props) {
 // console.log(props)
  const {movies,movieId,movieName,type  }=props

  // states goes here
  const [favourite,setFavourite]=useState(false)
  const [ids,setIds]=useState([])



  //event handlers goes from here

  function favouriteHandler(e){
    e.preventDefault();
    setFavourite(!favourite)

    let my_fav=localStorage.getItem('id')
        
        let my_fav1=JSON.parse(my_fav)||[]
        
        let mapped=my_fav1.map(ele => ele.movieId)
        
        if(mapped.includes(movieId)){

              my_fav1=my_fav1.filter( el => el.movieId!== movieId )
 
            
        }
        else

       // alert("do something")
        {my_fav1.push({movieId,movieName,type})}
        
    
        
        localStorage.setItem('id',JSON.stringify(my_fav1))

    
  
  }

  useEffect(()=>{
    const x= localStorage.getItem('id')
    const arr=JSON.parse(x)||[]
    arr.map((x,i)=>{
        if(x.movieId===movieId){
            setFavourite(true)
        }
    })
 
 },[])
  

  return (
    // <div className="cards-area" >

<div className="card" style={{width: "18rem"}}>
  {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg> */}
  <img className="bd-placeholder-img card-img-top" width="100%" height="180"  src={movies.Poster}/>
  <div className="card-body">
    <h5 className="card-title">{movies.Title}</h5>
  <p className="card-text">{movies.Year}</p>
    <a href="#" className="btn btn-primary" onClick={favouriteHandler} > {!favourite ? "Favorite" : "Unfavorite"}</a>
  </div>
{/* </div> */}


 
  

   
    </div>
  );
}

export default MovieCard;
