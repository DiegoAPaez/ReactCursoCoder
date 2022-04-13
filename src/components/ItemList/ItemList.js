import Item from '../Item/Item.js'

const ItemList = ({products}) => {
    return (
        <div className='grid grid-cols-5 gap-1 justify-items-center content-center ml-4'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}
export default ItemList