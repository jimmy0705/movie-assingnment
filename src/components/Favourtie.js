
import React, { useEffect,useState } from 'react';
import './common.css'
import FavList from './FavList';

 function Favorites(props){

    const [favourite, setFavourite] = useState(Boolean(localStorage.getItem("id")))
    const[data,setData] = useState([])


    useEffect(()=>{
        const my_favs= localStorage.getItem('id')
        var my_favs1=JSON.parse(my_favs)||[];
        console.log(my_favs1)
        setData(my_favs1)
    },[])
   
    if(!favourite){
        return (
            <>
               <h1 style={{textAlign:"center",marginTop:"4em",fontSize:"600"}}>No Favorite Movies added</h1>
                   
            </>
            )

    }
    else{

        return(
            <>
            <h1 className="favourite-title" style={{textAlign:"center",marginTop:"4em",marginBottom:"1em",fontWeight:"600"}}>Favorite Movies</h1>
            {data.map(dt=>{
                return(
                    <FavList movie={dt}  key ={dt.movieId}/>
                )
            })}
          
                
         </>

        )
    }
   

}

export default Favorites;