import { useState } from 'react';
import React from 'react';
import { useCartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetails = ({ item }) => {
    
    const [count, setCount] = useState(1)

    const { cartList, agregarProducto } = useCartContext()

    function onAdd(cant) {
        setCount(cant)
        agregarProducto({  ...item, cantidad: cant})
    }
    console.log(cartList)


    return (
        
         <div>
            <img src={item.foto} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <ItemCount onAdd={onAdd} count={count} initialstock={item.stock}/>
        </div>
                
    )
}
export default ItemDetails;