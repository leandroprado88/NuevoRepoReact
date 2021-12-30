import { useState } from "react"


const ItemCount = ({initialstock, onAdd}) => {
      

    const [count, setCount] = useState (1)

    function Sumar() {
        if (count < initialstock){
            setCount(count + 1)
        }
    }
    function Restar() {
        if (count > 0){
            setCount(count - 1)
        }
    }
    
    function Cantidad() {
        onAdd(count)
     }


    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={Sumar}>+</button>
                {count}
            <button type="button" className="btn btn-danger" onClick={Restar}>-</button>
            <button type="button" className="btn btn-light" onClick={Cantidad}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;
