const ItemCart = ({name, price, quantity}) => {
    return (
        <li key={prod.id}>{prod.name} cantidad: {prod.quantity} precio unidad: ${prod.price} subtotal: ${prod.quantity * prod.price} <button onClick={() => removeItem(prod.id)}>X</button></li>
    )
}