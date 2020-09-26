import React,{useState,useEffect} from 'react';


import {Container,DropdownButton,Dropdown} from 'react-bootstrap';
import './common.css'
import MovieCard from './Cardlist';

function Dropdwn(props) {

  

  return (
    <>
     <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
   
   <MovieCard/>
    
    </>
  );
}

export default Dropdwn;
