import {useState} from "react"


const ItemCount = ({initial, stock, onAdd}) => {
    
    const [count, setCount] = useState (1)

    function Sumar() {
        if (count < stock){
            setCount(count + 1)
        }
    }
    function Restar() {
        if (count < stock && count > 0){
            setCount(count - 1)
        }
    }

    function Agregar() {
        onAdd(count)
        setCount(1)
    }

    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={Sumar}>+</button>
                {count}
            <button type="button" className="btn btn-danger" onClick={Restar}>-</button>
            <button type="button" className="btn btn-light" onClick={Agregar}>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount;
