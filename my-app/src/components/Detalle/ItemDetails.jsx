import React from 'react';
import { useCartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetails = ({ item }) => {
    
    const {cartList, agregarProducto } = useCartContext();

    function onAdd(cant) {
        agregarProducto( { item: item , cantidad: cant} )
    }
    console.log(cartList);


    return (
        
         <div>
            <img src={item.foto} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <ItemCount onAdd={()=>onAdd()} initialstock={item.stock} />
        </div>
                
    )
}
export default ItemDetails;