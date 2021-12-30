import { useCartContext } from "../Context/CartContext";
import { Link } from 'react-router-dom'

function Cart() {
    const { botonCarrito, cartList, limpiarCarrito, precioFinal, itemsCarrito } = useCartContext()
    console.log(cartList)
    return (
            <div>
            <br />
            <h3>Nombre   <input type="text" /></h3>
            <br />
            <br />
            <h3>Apellido    <input type="text" /></h3>
            <br />
            <br />
            <h3>Email    <input type="text" /></h3>
            <br />
            <br />
            {cartList.map( item => <li key={item.id}>{item.cantidad}u - {item.name}</li>)  }
            <br />
            <h3>El precio final de tu compra  es ${precioFinal()}</h3>
            <br />
            <h3>Cantidad {itemsCarrito()}</h3>
            <button onClick={() => limpiarCarrito()}>
                <Link to="/">{botonCarrito}</Link>
            </button>

        </div>
    )
    }
export default Cart;