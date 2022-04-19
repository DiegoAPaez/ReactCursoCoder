import { useState } from "react";


const ItemCount = ({onConfirm,stock, initial}) => {
    const [count, setCount] = useState (initial)
    const decrement = () => {
        if (count > initial)
        setCount(count - 1)
    }

    const increment = () => {
        if (count < stock)
        setCount(count + 1)
    }
    return (
        <div className="flex flex-row items-center bg-gray-200 mx-2 rounded">
            <div className="bg-white flex flex-row w-1/2 m-2 justify-between items-center rounded">
                <button className="m-1 p-1" onClick={decrement}>-</button>
                <p className="m-1">{count}</p>
                <button className="m-1 p-1" onClick={increment}>+</button>
            </div>
            <button onClick={() => onConfirm(count)} className="text-center border-solid text-white bg-green-500 h-12 p-2 my-2 rounded">Añadir al carrito</button>  
        </div>
    )
}
export default ItemCount