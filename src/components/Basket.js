import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import BasketItem from "./BasketItem";

const Basket = ({userBasket})=>
{
    const {name} = useContext(UserContext)
    const basketList = userBasket.map((item, index)=>
        {
            
            return(
                <>
                
                <BasketItem key={index} item={item}/>
                </>
            )
        })
                
    return(
        <>
        <h2>Hi, {name}</h2>
        <ul>
       {basketList}
       </ul>
       </>
    )
}

export default Basket;