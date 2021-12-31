import { getFirestore } from '../../helpers/Firebase/firebase';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';




const ItemListContainer = () => {

    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
    const { catIdParams } = useParams();
    

        useEffect(() => {
        const db = getFirestore()
        const dbQuery = db.collection('Items') 
        const dbQueryWhere =  catIdParams ? dbQuery.where('categoria', '==', catIdParams) : dbQuery
        dbQueryWhere.get()
        .then(data => setProductos(data.docs.map(item => ({ id: item.id, ...item.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
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