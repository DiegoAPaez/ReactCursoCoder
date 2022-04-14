import ItemCount from "../Counter/ItemCount"

const ItemDetail = ({ id, name, image, category, description, price, detail, stock }) => {
    return (
        <article className="border-solid border-slate-100 bg-gray-200 w-4/5 p-2 mx-2 mt-3 text-center rounded">
            <header className="my-3">
                <h2 className="font-semibold text-xl">{name}</h2>
            </header>
            <div className="grid justify-items-center content-center">
                <img className="rounded h-80 row-start-1 row-end-2" src={image} alt={`Imagen: ${name}`}/>
                <section className="row-start-1 row-end-2 mx-3">
                    <p className="my-2 text-justify">Descripción: {description}</p>
                    <p className="my-2 text-sm italic">Categoria: {category}</p>
                    <p className="my-2 text-sm italic">{detail}</p>
                    <p className="my-2 font-semibold">Precio: ${price}</p>
                </section>           
                <footer className='col-start-1 col-end-3'>
                <ItemCount stock={stock} initial={1} className=""/>
                </footer>
            </div> 
        </article>
    )
}

export default ItemDetail