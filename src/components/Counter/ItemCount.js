import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState (0)
    const decrement = () => {
        if (count >= 1)
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div className="flex flex-col w-24 h-28 m-5 p-2 bg-gray-200 rounded">
            <div className="my-3 bg-white flex flex-row justify-center items-center rounded">
                <button className="m-1 p-1" onClick={decrement}>-</button>
                <p className="m-1">{count}</p>
                <button className="m-1 p-1" onClick={increment}>+</button>
            </div>  
            <a className="text-center border-solid text-white bg-green-500 p-2 rounded" href="#">Detalle</a>
        </div>
    )
}
export default Counter