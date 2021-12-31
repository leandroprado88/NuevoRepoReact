import { useState, createContext, useContext } from 'react'

const CartContext= createContext([])
 
export const  useCartContext =()=> useContext(CartContext)


function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([])
    const [botonCarrito, setBoton] = useState('Limpiar Carrito')

    const limpiarCarrito=()=>{
        setCartList([])
        setBoton('Seguir comprando')
    }
    const cambiarBoton=()=>{
        setBoton('Seguir comprando')
    }

    const precioFinal =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.cantidad * valor.price)), 0) 
    }
    const contadorItems =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.cantidad * 1)), 0) 
    }

    const cantidadProducto = () =>{
        return cartList.reduce( (acum, item)=> acum = acum + item.cantidad , 0)
    }
    const agregarProducto =(item)=>{
        const index = cartList.findIndex(i => i.id === item.id)
  
        if (index > -1) {
          const cantidadAnterior = cartList[index].cantidad

          cartList.splice(index, 1)
          setCartList([...cartList, { ...item, cantidad: item.cantidad + cantidadAnterior}])
        } else {
          setCartList([...cartList, {...item, cantidad: item.cantidad}])
        }
    }



    return(
        <CartContext.Provider value={{
            botonCarrito,
            cambiarBoton,
            cartList,
            agregarProducto,
            limpiarCarrito,
            precioFinal,
            cantidadProducto,
            contadorItems
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider