
const ItemDetail = ({ id, name, image, category, description, price, detail, stock }) => {
    return (
        <article className="w-2/4 border-solid border-slate-100 bg-gray-200 p-2 mx-2 mt-3 text-center rounded">
            <header className="my-3">
                <h2 className="font-semibold">{name}</h2>
            </header>
            <img className="rounded h-40" src={image} alt={`Imagen: ${name}`}/>
            <section>
                <p className="my-2">Categoria: {category}</p>
                <p className="my-2 text-justify">Descripción: {description}</p>
                <p className="my-2 italic">{detail}</p>
                <p className="my-2">Precio: ${price}</p>
            </section>           
            <footer className=''>
            </footer>
        </article>
    )
}

export default ItemDetail