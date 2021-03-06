/* Cecilia Zucchino */
const carrito=[];
 /* Forma corta del document ready */
$(() => {
    $(".contPrecio__boton").on('click',agregarSeleccionado); /* Le agrego el evnto a cada boton y llamo al agregarSeleccionado con un click */
    $(".divMensaje").prepend('<h6  class="msj" style="display: none" >Ya esás más cerca de hacer comidas más ricas!</h3>');
    $(".contPrecio__boton").on('click',mostrarMensaje);
});


const tableBody=document.querySelector('.tBody');//trae el table body
/* Funcion agregar productos seleccionados al arreglo de Carrito */
function agregarSeleccionado(event)
{
    let tituloP=event.target.parentNode.parentNode.children[1].textContent;//busco el titulo del producto
    let precioP=event.target.parentNode.children[0].textContent;//busco el precio del producto
    let producto = new Producto (tituloP,precioP)//creo un objeto producto
    carrito.push(producto); //agrego el objeto producto al arreglo
    agregarAlCarrito(carrito);//llamo a la funcion para agregar el producto al carrito y mostrarlo en html
    guardarCarrito(carrito);
}

/* Agregar items al carrito en el HTML */
function agregarAlCarrito(array)
{
    $("#tBody").html("");//lo inicializo vacio para que no me agregue mas de una fila cuando entra al foreach
    array.forEach ((producto) => 
    { //Por cada objeto del arreglo
        $("#tBody").append(`
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>1</td>
        </tr>`)
    });
}


/* Local Storage para guardar la info del carrito */
function guardarCarrito(carrito)
{
    if (carrito.length!=0) //Si el carrito no esta vacio, guardo lo que tiene adentro en el localStorage
    {
        localStorage.setItem('prodsEnCarrito',JSON.stringify(carrito));//lo gu ardo como JSON
        const prodStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));//lo paso a Obj de Javascript para mosrtar
        console.log(prodStorage);//lo muestro por consola
    }
}