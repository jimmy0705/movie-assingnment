import React from 'react';
import {Route,Redirect} from 'react-router-dom'

//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar';
import Search from './components/Search';
import Favorites from './components/Favourtie'

function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/" exact>
      <Search/>
     </Route>
     <Redirect to="/"/>
     <Route path="/favourite">
     <Favorites/>
     </Route>
     
     
    </div>
  );
}

export default App;
