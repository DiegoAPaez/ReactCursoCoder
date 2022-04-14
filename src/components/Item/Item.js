import { Link } from "react-router-dom"

const Item = ({id, name, image}) => {
    return (
        <div className="border-solid border-slate-100 bg-gray-200 w-44 px-3 py-4 mt-2 mb-2 text-center rounded">
            <img className="rounded h-40" src={image} alt={name}/>
            <h3 className="text-center my-2 py-2">{name}</h3>    
            <Link to={`/detail/${id}`} className="text-center border-solid text-white bg-green-500 p-2 my-2 rounded">Detalle</Link>     
        </div>
    )
}
export default Item