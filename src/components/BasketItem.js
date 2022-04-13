import React from "react";

const BasketItem = ({item})=>
{
    return (
        <>
        <p>{item.name}</p><span>{item.price}</span>
        </>
    )
}

export default BasketItem;