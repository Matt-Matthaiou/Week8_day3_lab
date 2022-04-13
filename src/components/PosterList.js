import React from "react";
import Poster from "./Poster";

const PosterList = ({posters, addItemToBasket})=>
{

    const posterList =  posters.map((poster, index) =>
    {
       return(
        <Poster poster={poster} key={index} addItemToBasket={addItemToBasket}/>
       ) 
    })
    
       
           
        
    

    return(
        <ul>
        
        {posterList}
        </ul>
    )
}

export default PosterList