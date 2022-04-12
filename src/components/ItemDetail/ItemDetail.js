
const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    return (
        <article className="">
            <header className="">
                <h2 className="">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className=""/>
            </picture>
            <section>
                <p className="">
                    Categoria: {category}
                </p>
                <p className="">
                    Descripción: {description}
                </p>
                <p className="">
                    Precio: ${price}
                </p>
            </section>           
            <footer className=''>
            </footer>
        </article>
    )
}

export default ItemDetail