import Item from '../Item/Item.js'

const ItemList = ({products}) => {
    return (
        <div className='flex flex-row ml-4'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}
export default ItemList