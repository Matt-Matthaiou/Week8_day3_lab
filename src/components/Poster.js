import React from "react";

const Poster = ({poster, addItemToBasket})=>
{

    const handleAdd = ()=>
    {
        addItemToBasket(poster)
    }

   return(
    <li>
        <p>Name: {poster.name}</p>
        <p>Type: {poster.description}</p>
        <p>Price: {poster.price}</p>
        <p>Dimensions: {poster.dimensions}</p>
        <button onClick={handleAdd}>Buy</button>
    </li>  
   ) 
}

export default Poster;