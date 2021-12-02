import React from "react";
import Item from "./Item";


const ItemList = ({lista}) => {
   
    
    return (
    <div>
        {lista && lista.map((item, index) => {
            return (
            <Item key={index} item={item} />
            )
            })}
        </div>
    )
}
export default ItemList;