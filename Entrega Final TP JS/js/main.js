/* Cecilia Zucchino */
let carritoLocalStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));
let carrito;

//Si el carrito tenia guardado algo, lo levanto del local storage
if(carritoLocalStorage){
    carrito = carritoLocalStorage;
}else{
    carrito = [];
}

cargarProdtuctos();

//Carga de productos dinamicamente en la pagina
function cargarProdtuctos()
{
    for(let producto of productos)
    {
        $('#productos').append(`<div class="contProd">
        <img src="${producto.imagen}" alt="${producto.id}" class="contProd__img">
        <h5 class="contProd__titulo">${producto.nombre}</h5>
        <div class="contPrecio">
            <h5 class="contPrecio__precio">${producto.precio}</h5>
            <button class="contPrecio__boton" id="btnComprar"> Comprar</button>
        </div>
        </div>`);
    }
}


