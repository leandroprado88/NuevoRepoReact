import { useState, createContext, useContext } from "react";

export const CartContext = createContext([])

export const useCartContext =()=> useContext(CartContext)

function CartContextProvider({ children }) {

    const [carList, setCarList] = useState([])

    const agregarProducto =(item) => {
        setCarList([...carList, item])
    }

    const vaciarCarrito=()=>{
        setCarList([])
    }

    return(
        <CartContext.Provider value={{
            carList, agregarProducto, vaciarCarrito
        }}>
       
        { children }
        </CartContext.Provider>
    )    

}

export default CartContextProvider;