
import React from 'react';
import './common.css'

 function FavList(props){
     console.log(props)
       let {movie} = props
    return(

        <div className="favourite-card">
        <p className="favourite-p" style={{}}>{movie.movieName}</p>
       
            
     </div>


    )



   


    
   

}

export default FavList;