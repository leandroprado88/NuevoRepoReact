import { useCartContext } from "../Context/CartContext";
import { useState } from 'react'
import { getFirestore } from "../../helpers/Firebase/firebase";
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'


function Cart() {
    const [idOrder, setIdOrder] = useState('')

    const {cartList, limpiarCarrito, precioTotal, contadorItems } = useCartContext()
    
    const generarOrden = (e)=> {
        e.preventDefault()
        
        const orden = {}   

        orden.buyer = {nombre: 'Leandro', email:'l.prado88@gmail.com', tel: '1157542284'}
        orden.total =  precioTotal()

        orden.items = cartList.map(itemsCarrito => {
            const id = itemsCarrito.id
            const nombre = itemsCarrito.name
            const cantidad = itemsCarrito.cantidad
            const precio = itemsCarrito.price

            return {id, nombre, cantidad, precio}   
        })

        const db = getFirestore()
        db.collection('cartlist').add(orden)
        .then(resp => setIdOrder(resp.id))
    

    }
    console.log(cartList)
    return (
            <div>
            <br />
            <h2>El producto es casi tuyo</h2>    

            <ProgressBar animated now={85} />
            <br />
            <h3>Nombre   <input type="text" /></h3>
            <br />
            <br />
            <h3>Apellido    <input type="text" /></h3>
            <br />
            <br />
            <h4>Email    <input type="email" placeholder="Ingresa tu Email" /></h4>
            <br />
            <br />
            <Form.Control type="text" placeholder="Alguna sugerencia en la compra?..." readOnly />
            {cartList.map( item => <li key={item.id}>{item.cantidad}u - {item.name}</li>)  }
            <br />
            <br />
            {idOrder !== '' && <label>Su número de pedido es: {idOrder}</label>}
            <form onSubmit={generarOrden}>
            <button className="btn btn-success ms-3 me-3 mt-3">Enviar Orden</button>
            </form>
            <br />
            <h3>El precio final de tu compra  es ${precioTotal()}</h3>
            <br />
            <h3>Cantidad {contadorItems()}</h3>
            <button onClick={() => limpiarCarrito()}> Vaciar Carrito
            </button>

        </div>
    )
    }
export default Cart;