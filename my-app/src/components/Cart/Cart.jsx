import { useCartContext } from "../Context/CartContext";
import { useState } from 'react'
import { getFirestore } from "../../helpers/Firebase/firebase";
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import firebase from "firebase";
import 'firebase/firestore';



function Cart() {
    const [idOrder, setIdOrder] = useState('')

    const {cartList, limpiarCarrito, precioFinal, contadorItems } = useCartContext()
    
    const generarOrden = (e)=> {
        e.preventDefault()
        
        const orden = {}   

        orden.buyer = {nombre: 'Leandro', email:'l.prado88@gmail.com', tel: '1157542284'}
        orden.total =  precioFinal()

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
        
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId() , 'in', cartList.map(i=> i.id)//[id1, id2....]
        )
    
        const batch = db.batch();
    
        itemsToUpdate.get()

        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().cantidad - cartList.find(item => item.id === docSnapshot.id).cantidad
                })
            })
    
            batch.commit().then(res =>{
                console.log('se actualizo')
            })
        })
    
        
          console.log('verificar cupon')
          console.log(orden)


    }
    console.log(cartList)

    
    return (
            <div>
            <br />
            <h2>El producto es casi tuyo</h2>    

            <ProgressBar animated now={85} />
            <br />
            <h3>El precio final de tu compra  es ${precioFinal()}</h3>
            <br />
            <h3>Nombre   <input type="text" /></h3>
            <br />
            <br />
            <Form.Control type="text" placeholder="Alguna sugerencia en la compra?..." readOnly />
            {cartList.map( item => <li key={item.id}>{item.cantidad}u - {item.name}</li>)  }
            <br />
        
            <form onSubmit={generarOrden}>
            </form>
            <h3>Cantidad {contadorItems()}</h3>
            <button onClick={() => limpiarCarrito()}> Vaciar Carrito
            </button>
               <form 
            onSubmit={generarOrden} 
        >
            <button>Enviar Orden</button>
        </form>
        {idOrder !== '' && <label>Su número de pedido es: {idOrder}</label>}
        </div>
    )
    }
export default Cart;