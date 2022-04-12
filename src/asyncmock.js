const products = [
    {id:1, name:'Banneton Redondo', price: 10, category: 'proofing', image: './img/bannetones/ban-redondo.jpg', stock: 20, description:'Usar un banneton te ayudará a obtener una barra más crujiente con una corteza deliciosamente crujiente. Esto se debe a que las cestas banneton están hechas de caña natural y funcionan creando un microclima ligeramente húmedo entre la masa y el banneton durante la prueba. Como la masa se seca, crea una piel, y esto es lo que hace una corteza magnífica en el pan artesanal. ¡Disfruta de tu pan redondo crujiente con un hermoso patrón ascendente!', detail: 'Medidas aproximadas: 21x8cm'},
    {id:2, name:'Banneton Barra', price: 12, category: 'proofing', image: './img/bannetones/ban-barra.jpg', stock: 25, description:'Usar un banneton te ayudará a obtener una barra más crujiente con una corteza deliciosamente crujiente. Esto se debe a que las cestas banneton están hechas de caña natural y funcionan creando un microclima ligeramente húmedo entre la masa y el banneton durante la prueba. Como la masa se seca, crea una piel, y esto es lo que hace una corteza magnífica en el pan artesanal. ¡Disfruta de tu pan redondo crujiente con un hermoso patrón ascendente!', detail: 'Medidas aproximadas: 35x10x8cm'},
    {id:3, name:'Banneton Cuadrado', price: 15, category: 'proofing', image: './img/bannetones/ban-cuadrado.jpg', stock: 10, description:'Usar un banneton te ayudará a obtener una barra más crujiente con una corteza deliciosamente crujiente. Esto se debe a que las cestas banneton están hechas de caña natural y funcionan creando un microclima ligeramente húmedo entre la masa y el banneton durante la prueba. Como la masa se seca, crea una piel, y esto es lo que hace una corteza magnífica en el pan artesanal. ¡Disfruta de tu pan redondo crujiente con un hermoso patrón ascendente!', detail: 'Medidas aproximadas: 15x15x8cm'},
    {id:4, name:'Banneton Tiangulo', price: 13, category: 'proofing', image: './img/bannetones/ban-triangulo.jpg', stock: 10, description:'Usar un banneton te ayudará a obtener una barra más crujiente con una corteza deliciosamente crujiente. Esto se debe a que las cestas banneton están hechas de caña natural y funcionan creando un microclima ligeramente húmedo entre la masa y el banneton durante la prueba. Como la masa se seca, crea una piel, y esto es lo que hace una corteza magnífica en el pan artesanal. ¡Disfruta de tu pan redondo crujiente con un hermoso patrón ascendente!', detail: 'Medidas aproximadas: 18x8cm'},
    {id:5, name:'Banneton Ovalado', price: 10, category: 'proofing', image: './img/bannetones/ban-ovalado.jpg', stock: 30, description:'Usar un banneton te ayudará a obtener una barra más crujiente con una corteza deliciosamente crujiente. Esto se debe a que las cestas banneton están hechas de caña natural y funcionan creando un microclima ligeramente húmedo entre la masa y el banneton durante la prueba. Como la masa se seca, crea una piel, y esto es lo que hace una corteza magnífica en el pan artesanal. ¡Disfruta de tu pan redondo crujiente con un hermoso patrón ascendente!', detail: 'Medidas aproximadas: 21x15x8cm'}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 700)
    })
}