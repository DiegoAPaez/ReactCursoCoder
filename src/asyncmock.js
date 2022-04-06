const products = [
    {id:1, name:'Banneton Redondo', price: 10, category: 'proofing', image: './img/bannetones/ban-redondo.jpg', stock: 5, description:'Banneton para fermentacion'},
    {id:2, name:'Banneton Barra', price: 12, category: 'proofing', image: './img/bannetones/ban-barra.jpg', stock: 100, description:'Banneton para fermentacion'},
    {id:3, name:'Banneton Cuadrado', price: 15, category: 'proofing', image: './img/bannetones/ban-cuadrado.jpg', stock: 100, description:'Banneton para fermentacion'},
    {id:4, name:'Banneton Tiangulo', price: 13, category: 'proofing', image: './img/bannetones/ban-triangulo.jpg', stock: 100, description:'Banneton para fermentacion'},
    {id:5, name:'Banneton Ovalado', price: 10, category: 'proofing', image: './img/bannetones/ban-ovalado.jpg', stock: 100, description:'Banneton para fermentacion'}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}