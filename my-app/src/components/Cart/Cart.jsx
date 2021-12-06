import { useCartContext } from "../Context/CartContext";


function Cart() {

    const { cartList,vaciarCarrito} = useCartContext()

    console.log(cartList);

    return (
        <div>
            {cartList && cartList.map(({item}) => <li key={item.id}> {item.name}</li>)}
            <button onClick={()=> vaciarCarrito()}>Vaciar Carrito</button>
        </div>
    )
    
}

export default Cart;