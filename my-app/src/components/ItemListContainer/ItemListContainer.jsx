import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from '../../Detalle/ItemDetail';
import getFetch from '../../helpers/getFetch';
import { useParams } from 'react-router-dom';


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
    }, [catIdParams]);
    
    
    return (
        <><div>
       
            {loading}
            <ItemDetail item={productos}/>
        </div></>

    )
}
export default ItemListContainer;