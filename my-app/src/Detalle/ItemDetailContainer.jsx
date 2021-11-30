import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getFetch from '../helpers/getFetch';
import ItemDetail from '../Detalle/ItemDetail';


const ItemDetailContainer = () =>{
    
    const [productoIndividual, setProductoIndividual]= useState({});
    const [loading, setLoading] = useState(true);
    const { itemIdParams } = useParams();

      useEffect(() => {

          getFetch.then((prodEncontrado)=>{
              setProductoIndividual(prodEncontrado) 
          })
            .catch((error)=>{
                console.log(error);
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        }, [itemIdParams])
     

    
    return (
        <>
        <div>
            {loading 
                ? 
            <h1>Cargando..</h1> 
                : 
            <ItemDetail item={productoIndividual}/> }
        </div>
    </>

    )
}

export default ItemDetailContainer;