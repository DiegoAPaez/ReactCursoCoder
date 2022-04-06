import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState (1)
    const decrement = () => {
        if (count > 1)
        setCount(count - 1)
    }

    const increment = () => {
        setCount(count + 1)
    }
    return (
        <div className="flex flex-col items-center bg-gray-200 rounded">
            <div className="bg-white flex flex-row w-1/2 my-2 justify-between items-center rounded">
                <button className="m-1 p-1" onClick={decrement}>-</button>
                <p className="m-1">{count}</p>
                <button className="m-1 p-1" onClick={increment}>+</button>
            </div>  
        </div>
    )
}
export default Counter