
import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getFetch } from '../../helpers/getFech';
import { useParams } from 'react-router-dom';

const ItemListContainer = () =>{

    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
   
    const { catIdParams } = useParams(); 
      useEffect(() => {
          const promesa = new Promise ((res, rej)=> {
              setLoading(true);
              setTimeout(()=> {
                  res(getFetch)
              }, 2000)
          })
          if(catIdParams){
          promesa.then((getFetch)=>{
              setProductos(getFetch.filter(productos => productos.categoria === catIdParams)) 
          })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        } else {
            promesa.then((getFetch)=>{
                console.log('OK sin filtrar');
                setProductos(getFetch)
            })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            })
        }}, [catIdParams])

    return(
    <>
        <p style={{fontSize: 20, color: "black"}}> 
            Lista 
        </p>
        <div style={{display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'}}>
            {loading 
                ? 
            <h1>Está ejecutandose la promesa</h1> 
                : 
            <ItemList lista={productos}/> }
        </div>
    </>
    )
    };

export default ItemListContainer;