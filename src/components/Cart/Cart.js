import { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, removeItem, totalCheckout, clearCart} = useContext(CartContext)

    if(cart.length === 0) {
        return(
           <div className="text=center">
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className="text-center border-solid text-white bg-blue-500 p-2 mx-3 my-2 rounded">Volver a la tienda</Link>
            </div>
        )
    }

    return(
        <div className="text-center w-2/4 mx-3 bg-gray-200 rounded">
            <h1 className="text-center">Carrito</h1>
            <table className="bg-gray-100 w-auto h-auto p-3 mx-3 mb-3 rounded">
                <thead>
                    <tr>
                        <th className="mx-2 px-2 text-center">Nombre</th>
                        <th className="mx-2 pl-3 text-right">Precio</th>
                        <th className="mx-2 pl-3 text-right">Cantidad</th>
                        <th className="mx-2 pl-3 text-right">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                        {cart.map(prod => 
                        <tr key={prod.id}>
                        <td className="text-left">{prod.name}</td> 
                        <td className="text-right">${prod.price}</td>
                        <td className="text-right">{prod.quantity}</td>
                        <td className="text-right">${prod.quantity * prod.price}</td>
                        <td className="px-3"><button onClick={() => removeItem(prod.id)} className="text-center bg-red-500 p-1 rounded">X</button></td></tr>
                        )}
                        
                </tbody>
            </table>
            <p className="text-center font-semibold">Total: ${totalCheckout()}</p>
            <Link to='/' className="text-center border-solid text-white bg-blue-500 p-2 mx-3 my-2 rounded">Volver a la tienda</Link>
            <button className="text-center border-solid text-white bg-red-500 p-2 mx-3 my-2 rounded" onClick={clearCart}>Vaciar Carrito</button>
            <button className="text-center border-solid text-white bg-green-500 p-2 mx-3 my-2 rounded">Finalizar compra</button>
        </div>
        
    )
}
export default Cart