import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getFetch from '../components/ItemListContainer/getFetch';
import ItemDetails from '../Detalle/ItemDetails';


const ItemDetailContainer = () =>{
    
    const [productoIndividual, setProductoIndividual]= useState({});
    const [loading, setLoading] = useState(true);
    const { itemIdParams } = useParams();

      useEffect(() => {

          getFetch().then((prodEncontrado)=>{
              setProductoIndividual(prodEncontrado.find(prod => prod.id === parseInt (itemIdParams))) 
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
            <ItemDetails item={productoIndividual}/> }
        </div>
    </>

    )
}

export default ItemDetailContainer;