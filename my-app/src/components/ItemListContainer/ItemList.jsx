import { useState, useEffect } from 'react';
import { getFetch } from '../../helpers/getFech';
import ItemCount from '../ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
    const [products, setProducts] = useState([])  
    const [loading, setLoading] = useState(true)  
   
  
    useEffect(() => {
        getFetch
        .then(data => { 
            setProducts(data)     
        })
  
        .catch(err => console.log(err))    
        .finally(()=> setLoading(false))
        
    
    },[]);

    function onAdd (cant) {
        console.log(cant);
    }
  
    return (
    
        <div className="App">        
            { loading ? <h1>Cargando...</h1> :  products.map(prod => <div key={prod.id} className="card w-50 mt-5" >
                                        <div className="card-header">
                                            {prod.nombre}
                                        </div>
                                        <div className="card-body">
                                            <img src={prod.foto} alt="foto" />
                                            {prod.precio}
                                        
                                        </div>
                                        <div className="card-footer">
                                        <ItemCount initial={0} stock={10} onAdd={onAdd} />
                                         
                                        </div>
                                        
                                    </div> 
            )}
       </div>
      );
  }

  export default App;