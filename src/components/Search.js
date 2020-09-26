
import React,{useState} from 'react';


import { Button,Form,Container,Row,Col,InputGroup,FormControl,Dropdown,DropdownButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './common.css'
import Dropdwn from './Dropdown';




  
function Search(props) {

    //states- query, movies,totalresults
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false);
    const [nodata, setNodata] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const [value,setValue] = useState("All")
    const [movies, setMovies] = useState([]);

   
   
   
    async  function searchMovies (e) {
     
      e.preventDefault();
     // console.log(query);
      setLoading(true)
     // const query = "inception";
      
      const url = `http://www.omdbapi.com/?apikey=e0df3e16&s=${query}&page=1&type=`;
      
      
      try {
          const res = await fetch(url);
          const data  = await res.json();
          console.log(typeof(data.Response))
          console.log(data.Response)
          if(data.Response === "False"){
            setNodata(true)
            setLoading(false);
            return;
          }
          setLoading(false);
          //setNodata(false);
          setMovies(data.Search);
          
        // console.log(data)
      }catch(err){
          console.error(err);
          setErrorMessage("something went wrong");
          setLoading(false);
      }
  }

  






  return (
    <div className="search-area" style={{marginTop:"6em"}}>

<Container>

<Form inline>
  <Form.Label htmlFor="inlineFormInputName2" srOnly>
    Name
  </Form.Label>
  <Form.Control
    className="mb-2 mr-sm-2"
    id="inlineFormInputName2"
    placeholder="Jane Doe"
  />
 
  <Button type="submit" className="mb-2">
    Submit
  </Button>
</Form>

<Dropdwn/>
   
</Container>
  
      
    </div>
  );
}

export default Search;
