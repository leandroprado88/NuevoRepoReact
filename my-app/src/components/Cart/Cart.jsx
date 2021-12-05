import { useCartContext } from "../Context/CartContext";


function Cart() {

    const { cartList,vaciarCarrito} = useCartContext

    return (
        <div>
            { cartList.map(prod => <li key={prod.id}> {prod.name} {prod.stock}</li>)}
            <button onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
        </div>
    )
    
}

export default Cart;