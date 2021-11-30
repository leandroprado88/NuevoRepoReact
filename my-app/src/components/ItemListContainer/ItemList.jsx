import React from "react";
import Item from "./Item";
import getFetch from  "../../helpers/getFetch";

const ItemList = (props) => {
   

    return (
        <div>
            {getFetch.map((item, index) => {
                return (
                    <Item key={index} item={item} />
                )
            })}
        </div>
    )
}
export default ItemList;