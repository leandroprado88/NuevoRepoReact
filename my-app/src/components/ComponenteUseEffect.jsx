import { useState, useEffect } from 'react';
import './App.css';
// import SuperForm from './clase4/EjemploUno';
// import {SuperButon} from './clase4/EjemploUno'



function ComponenteUseEffect({defaultName}) {
    // const state = 'esto es un estado que morira al finalizar la funcíon'
    const [name, setName] = useState('React Clase')
    useEffect(() => {
        console.log('App Montada')
        
    },[name])
    useEffect(() => {
        console.log('Recive la props', defaultName)
        
    },[defaultName])
    
    console.log(name);
    console.log('antes de renderizar');
    return (                     
        <div onClick={() => setName('react function')}>
            <p>{name}</p>
        </div>      
    );
}

export default ComponenteUseEffect;

