import { useState, useEffect } from 'react';
import getFetch from './getFetch';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';



const ItemListContainer = () => {

    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
    const { catIdParams } = useParams();

    useEffect(() => {

        if(catIdParams){
        getFetch.then((data)=>{
            setProductos(data.filter(prod => prod.categoria === catIdParams))
        })
          .catch((error)=>{console.log(error);})
          .finally(()=>{setLoading(false)})
      } else {
        getFetch.then((data)=>{
              setProductos(data)
          })
          .catch(error =>{console.log(error);})
          .finally(()=>{setLoading(false)})
    }
    }, [catIdParams])
    console.log(productos);
    
    
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