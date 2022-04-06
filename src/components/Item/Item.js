import Counter from "../Counter/ItemCount"

const Item = ({name, image}) => {
    return (
        <div className="border-solid border-slate-100 bg-gray-200 p-2 mx-2 text-center rounded">
            <img className="rounded h-40" src={image}/>
            <h3 className="text-center py-2">{name}</h3>
            <Counter/>
            <button className="text-center border-solid text-white bg-green-500 p-2 rounded">Ver Detalle</button>     
        </div>
    )
}
export default Item