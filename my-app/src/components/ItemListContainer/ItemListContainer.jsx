import getFirestore  from '../../helpers/getFirestore';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';




const ItemListContainer = () => {

    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
    const { catIdParams } = useParams();
    

        useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('Items') // conexion con firestore
        dbQuery.get()


        if (catIdParams) {
            dbQuery.collection('Items').where('categoria', '==', catIdParams).get() 
            .then(data => setProductos(   data.docs.map(item => ( { id: item.id, ...item.data() } ))   ))
            .catch((err)=>{console.log(err);})
            .finally(()=>{setLoading(false)})
        } else {
            dbQuery.collection('Items').get() 
            .then(data => setProductos(   data.docs.map(pro => ( { id: pro.id, ...pro.data() } ))   ))
            .catch(err =>{console.log(err);})
            .finally(()=>{setLoading(false)})
            }
    }, [catIdParams])
    
        return (
        <><div>
            {loading 
                ? 
            <h1>Cargando..</h1> 
                : 
            <ItemList  lista={productos}/> }
        </div></>
        )
}
export default ItemListContainer;