/* Cecilia Zucchino */

 /* Forma corta del document ready */
$(() => {
    $(".contPrecio__boton").on('click',agregarAlCarrito); /* Le agrego el evnto a cada boton y llamo al agregarSeleccionado con un click */
    $(".divMensaje").prepend('<h6  class="msj" style="display: none" >Ya esás más cerca de hacer comidas más ricas!</h3>');
    $(".contPrecio__boton").on('click',mostrarMensaje);
});


/* Funcion agregar productos seleccionados al arreglo de Carrito */
function agregarAlCarrito(event)
{
    let prodStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));
    let tituloP=event.target.parentNode.parentNode.children[1].textContent;//busco el titulo del producto
    let precioP=event.target.parentNode.children[0].textContent;//busco el precio del producto
    let idP=event.target.parentNode.parentNode.children[0].alt;//con esto busco el id
    //Si el storage esta vacio
    //creo un nuevo producto
    //lo agrego
    if(prodStorage==null)
    {
        let producto = new Producto (tituloP,precioP,idP)//creo un objeto producto
        carrito.push(producto); //agrego el objeto producto al arreglo
    }
    else //si el storage NO esta vacio
        {
            let index=prodStorage.findIndex(producto => producto.id === idP);//me fijo si el producto con el id del localstorage esigual al del clickeado
            if(index == -1)//si no existe agrego  un nuevo prod con ese id al carrito
            {
                let producto = new Producto (tituloP,precioP,idP)//creo un objeto producto
                carrito.push(producto); //agrego el objeto producto al arreglo
            }
            else 
            {
                calcularCantidad(index); //Si el prod ya existe llamo a la funcion calcularCantidad para que la incremente
                calcularSubTotal(index);
            }
        }
    
    agregarAlCarritoHTML(carrito);//llamo a la funcion para agregar el producto al carrito y mostrarlo en html
    guardarCarritoStorage(carrito);
}

function calcularCantidad(index)
{
    carrito[index].cantidad++;
    //carrito[index].subtotal=carrito[index].precio * carrito[index].cantidad;
}

function calcularSubTotal(index)
{
    
    console.log(carrito[index].precio * carrito[index].cantidad);
}

/* Agregar items al carrito en el HTML */
function agregarAlCarritoHTML(arrayCarrito)
{
    $("#tBody").html("");//lo inicializo vacio para que no me agregue mas de una fila cuando entra al foreach
    arrayCarrito.forEach ((producto) => 
    { //Por cada objeto del arreglo
        $("#tBody").append(`
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.subtotal}</td> */   
        </tr>`)
    });
}
/* 

/* Local Storage para guardar la info del carrito */
function guardarCarritoStorage(carrito)
{
    if (carrito.length!=0) //Si el carrito no esta vacio, guardo lo que tiene adentro en el localStorage
    {
        localStorage.setItem('prodsEnCarrito',JSON.stringify(carrito));//lo guardo como JSON
        let prodStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));//lo paso a Obj de Javascript para mostrar
        console.log(prodStorage);//lo muestro por consola
    }
}