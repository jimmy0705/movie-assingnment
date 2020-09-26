import React,{useState,useEffect} from 'react';


import {Container,DropdownButton,Dropdown} from 'react-bootstrap';
import './common.css'
import MovieCard from './Cardlist';

function Dropdwn(props) {
 //console.log(props)

 let {loading,nodata,movies} = props

// state mangement for this component goes here
const [value,setValue] = useState("All")
//event handlers goes from here


function dropdownHandler(e){
    e.preventDefault();
   console.log(e.target.text)
    setValue(e.target.text)
   // DropdownHnadler(dropdownValue)
  
  
  }


  if (movies!==undefined ){
    if (value==='movie'){
       
        movies=movies.filter(el => el.Type==='movie')
    }
    else if (value==='series'){
        movies=movies.filter(el => el.Type==='series')
    }
    else if (value==='episodes'){
        movies=movies.filter(el => el.Type==='episodes')
    }
   }
  
  
  useEffect(()=>{
  
  },[value])



  

  return (
    <>
     <DropdownButton className="drp-button"  id="dropdown-basic-button" title={value} style={{textAlign:"center"}}>
      <div onClick={dropdownHandler} >
     <Dropdown.Item href="#">All</Dropdown.Item>
      <Dropdown.Item href="#?">movie</Dropdown.Item>
      <Dropdown.Item href="#">series</Dropdown.Item>
      <Dropdown.Item href="#">episodes</Dropdown.Item>
      </div>
</DropdownButton>

   
   <>
    <div className="cards-area" >
   {loading ? (
         <h3 className="result-loading" style={{textAlign:"center"}}>loading...</h3>
         ): nodata ? (<h3 className="result-nodata" style={{textAlign:"center"}}>Too Many Datas...</h3>) : (
          movies.map(movie => (
            <MovieCard movies={movie} movieId={movie.imdbID} movieName={movie.Title} type={movie.Type} key={movie.imdbID} />
         ))
        )}
        </div>
   </>
   {/* <MovieCard/> */}
    
    </>
  );
}

export default Dropdwn;
