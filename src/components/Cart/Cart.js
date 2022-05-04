import { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "react-router-dom"
import { firestoreDb } from "../../services/firebase"
import { getDocs, writeBatch, query, where, collection, documentId, addDoc} from "firebase/firestore"
import Form from "../Form/Form"

const Cart = () => {
    const { cart, removeItem, totalCheckout, clearCart} = useContext(CartContext)
    const [userInfo, setUserInfo] = useState({})
    const [orderId, setOrderId] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(false)
    
    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: userInfo,
            total: totalCheckout(),
            date: new Date()
        }
    const ids = cart.map(prod => prod.id)

    const batch = writeBatch(firestoreDb)

    const collectionRef = collection(firestoreDb, 'products')

    const outOfStock = []

    getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                const collectionRef = collection(firestoreDb, 'orders')
                return addDoc(collectionRef, objOrder)
            } else {
                return Promise.reject({ name: 'outOfStockError', products: outOfStock})
            }
        }).then(({ id }) => {
            batch.commit();
            setOrderId(id);
            console.log(`El id de la orden es ${id}`)
        }).catch(error => {
            setErrorMessage(error)
        }).finally(() => {
            clearCart()
            setLoading(false)
        })
}

    if(loading) {
        return <h1>Generando su pedido</h1>
    }


    if(cart.length === 0) {
        return(
           <div className="text=center">
                {orderId && !errorMessage && <h1 className="mt-3">{`El número de su pedido es: ${orderId}`}</h1>}
                {!orderId && <h1 className="mt-3">{`Su carrito se encuentra vacio ${errorMessage}`}</h1>}
                <Link to='/' className="text-center border-solid text-white bg-blue-500 p-2 mx-3 my-3 rounded">Volver a la tienda</Link>
            </div>
        )
    }

    return(
        <div className="text-center w-2/4 mx-3 bg-gray-200 rounded">
            <h1 className="text-center">Carrito</h1>
            <Form setUserInfo={setUserInfo}/>
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
            <button className="text-center border-solid text-white bg-green-500 p-2 mx-3 my-2 rounded" onClick={createOrder}>Finalizar compra</button>
        </div>
        
    )
}
export default Cart