import React,{useState,useEffect} from 'react';


import {Container,DropdownButton,Dropdown} from 'react-bootstrap';
import './common.css'
import MovieCard from './Cardlist';

function Dropdwn(props) {
 console.log(props)

 const {loading,nodata,movies} = props
  

  return (
    <>
     <DropdownButton id="dropdown-basic-button" title="Dropdown button" style={{textAlign:"center"}}>
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
   
   <>
   {loading ? (
         <h3 className="result-loading">loading...</h3>
         ): nodata ? (<h3 className="result-nodata">no data available...</h3>) : (
          movies.map(movie => (
            <MovieCard movies={movie} key={movie.imdbID} />
         ))
        )}
   </>
   {/* <MovieCard/> */}
    
    </>
  );
}

export default Dropdwn;
