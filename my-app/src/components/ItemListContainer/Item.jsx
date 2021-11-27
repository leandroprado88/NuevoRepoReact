import React from 'react';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';



export default function Item({item}) {


    return (
            <li key={item.nombre}>
                <div>
                    <div>
                        <Link to={`/item/${item.nombre}`}>
                        </Link>
                    </div>
                    <div>
                        <h3>{item.nombre}</h3>
                        <p>{item.precio}</p>
                        <ItemCount stock={item.stock} id={item.id} />
                    </div>
                </div> 
            </li>
            )
    
}