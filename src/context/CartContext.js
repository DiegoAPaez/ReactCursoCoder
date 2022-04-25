import { createContext, useState } from "react";


const CartContext =  createContext()

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        setCart([...cart, productToAdd])
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(prod => {
            count = count += prod.quantity
        })
        return count
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }

    const totalCheckout = () => {
        let productPrice = 0;
        let cartTotal = [];
        for (let product of cart) {
            productPrice = (product.price)*(product.quantity);
            cartTotal = [...cartTotal,productPrice];
        }
        const checkout = cartTotal.reduce((a , b) => a + b, 0);
        return checkout
    }

    return (
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem,
            totalCheckout
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext