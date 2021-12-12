import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from './ItemDetails';
import { getFirestore } from '../../helpers/Firebase'


const ItemDetailContainer = () =>{
    
    const [productoIndividual, setProductoIndividual]= useState({});
    const [loading, setLoading] = useState(true);
    const { itemIdParams } = useParams();
    
      
    useEffect(() => {

        const db = getFirestore()
        db.collection('items').doc(itemIdParams).get()
        .then( res => {        
        console.log('llamada a api') // alguna accion con la respuesta  
            setProductoIndividual( {id: res.id, ...res.data()} )
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