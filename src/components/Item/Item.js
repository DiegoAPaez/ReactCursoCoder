import ItemCount from "../Counter/ItemCount"
import { Link } from "react-router-dom"

const Item = ({name, image, stock}) => {
    return (
        <div className="border-solid border-slate-100 bg-gray-200 p-2 mx-2 text-center rounded">
            <img className="rounded h-40" src={image} alt=''/>
            <h3 className="text-center py-2">{name}</h3>
            <ItemCount stock={stock} initial={1} className="my-2"/>
            <Link to='/detail' className="text-center border-solid text-white bg-green-500 p-2 rounded">Detalle</Link>     
        </div>
    )
}
export default Item