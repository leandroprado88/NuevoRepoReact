import { useState } from "react";


const InputCount= ()=> {

    return <button className="btn btn-outline-primary" onClick={()=>console.log('ir a cart') } >Ir al Cart o Terminar compra</button>
}



const ButtonCount= ({handleInter})=> {
    return <button className="btn btn-outline-success" onClick={handleInter}>Agregar Al carrito</button>

}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            <h2>Item Description</h2>
            
            {
                inputType === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
        </div>
    )
}

export default Intercambiabilidad
