import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails from './ItemDetails';
import {getFirestore} from '../../helpers/Firebase/firebase'


const ItemDetailContainer = () =>{
    
    const [productoIndividual, setProductoIndividual]= useState({});
    const [loading, setLoading] = useState(true);
    const { itemIdParams } = useParams();
    
      
    useEffect(() => {

        const db = getFirestore()
        const dbQuery = db.collection('Items')
        dbQuery.doc(itemIdParams).get()
            .then(res => {   
                setProductoIndividual({ id: res.id, ...res.data() })
                console.log(res);
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
         // eslint-disable-next-line 
    },[itemIdParams])
     
    
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