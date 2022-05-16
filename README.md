# Curso React Coderhouse
## _Proyecto E-commerce_

Inicialmente el componente **ItemListContainer** muestra el catalogo de productos completo, los mismos se encuntran almacenados en Firebase. 
A traves de **NavBar** podemos filtrar los elementos que se muestran segun su categoria y con un enlace para cada una de ellas en la barra de navegación: mediante react router y la utilizacion de useParams se filtran los productos, se aplica useState y se obtienen los productos filtrados.
El componente **ItemDetail** muestra la informacion detallada del articullo seleccionado (nombre, imagen, descripcion, detalle, stock disponible y precio), tambien permite seleccionar la cantidad (**ItemCount**) para realizar una orden limitada segun el stock disponible. 
Una vez añadido el elemento al carrito se puede proceder a la visualizacion del mismo (**Cart**) o volver a la tienda para continuar con la seleccion de productos.
El componente **Cart** muestra un listado de los elementos que incluye (no visible si se encuentra vacio), con el detalle de cantidad, precio total por articulo y de la orden. 
Además se incluye el componente **Form** para registrar los datos del usuario que seran almacenados una vez confirmada la orden junto a los productos seleccionadios y se retorna al usuario el ID de su orden. Finalizado el proceso de compra el carrito se vacia automaticamente y permanece oculto nuevamente en la navegación.


**_Proceso de compra:_**


![](https://github.com/DiegoAPaez/ReactCursoCoder/blob/1610d07a7a694bd3828ebc60b0dd65a79538deab/public/gif/e-commerce.gif)

## License

MIT
