import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import { getFetch } from './helpers/getFech';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [products, setProducts] = useState([])  
  const [loading, setLoading] = useState(true)  
 

  useEffect(() => {
      getFetch
      .then(data => {
          console.log('llamada Api')   
          setProducts(data)     
      })

      .catch(err => console.log(err))    
      .finally(()=> setLoading(false))
      
      return () => {
          console.log('clean')
      }
  },[]);

  return (
  
      <div className="App">   
          <NavBar />        
          { loading ? <h1>Cargando...</h1> :  products.map(prod => <div key={prod.id} className="card w-50 mt-5" >
                                      <div className="card-header">
                                          {prod.nombre}
                                      </div>
                                      <div className="card-body">
                                          <img src={prod.foto} alt="foto" />
                                          {prod.precio}
                                      
                                      </div>
                                      <div className="card-footer">
                                          
                                              <button className="btn btn-outline-primary btn-block">
                                                  Comprar
                                              </button>
                                       
                                      </div>
                                      
                                  </div> 
          )}
     </div>
    );
}

export default App;
