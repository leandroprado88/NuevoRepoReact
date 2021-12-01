import {useState} from "react"


const ItemCount = ({initialstock}) => {
    
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
    console.log(count);
    function Agregar() {
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
