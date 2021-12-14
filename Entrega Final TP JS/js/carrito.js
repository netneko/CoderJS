/* Cecilia Zucchino */
let carritoLocalStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));
let carrito;

//Si el carrito tenia guardado algo, lo levanto del local storage
if(carritoLocalStorage){
    carrito = carritoLocalStorage;
}else{
    carrito = [];
}

 /* Forma corta del document ready */
 /* Mostrar mensaje cada vez que se agrega algo al carrito */
$(() => {
    $(".contPrecio__boton").on('click',agregarAlCarrito); /* Le agrego el evnto a cada boton y llamo al agregarSeleccionado con un click */
    $(".divMensaje").prepend('<h6  class="msj" style="display: none" >Ya esás más cerca de hacer comidas más ricas!</h3>');
    $(".contPrecio__boton").on('click',mostrarMensaje);
    $(".btnEliminar").on('click',eliminarProducto); //No me esta entrando a esta funcion
});


/* Funcion agregar productos seleccionados al arreglo de Carrito */
function agregarAlCarrito(event)
{

    let tituloP=event.target.parentNode.parentNode.children[1].textContent;//busco el titulo del producto
    let precioP=event.target.parentNode.children[0].textContent;//busco el precio del producto
    let idP=event.target.parentNode.parentNode.children[0].alt;//con esto busco el id
    console.log(precioP)
            let index=carrito.findIndex(producto => producto.id === idP);//me fijo si el producto con el id del localstorage esigual al del clickeado
            if(index == -1)//si no existe agrego  un nuevo prod con ese id al carrito
            {
                let producto = new Producto (tituloP,precioP,idP)//creo un objeto producto
                carrito.push(producto); //agrego el objeto producto al arreglo
            }
            else 
            {
                calcularCantidad(index); //Si el prod ya existe llamo a la funcion calcularCantidad para que la incremente
                console.log(carrito);
            }
    agregarAlCarritoHTML(carrito);//llamo a la funcion para agregar el producto al carrito y mostrarlo en html
    guardarCarritoStorage(carrito);
    carritoCant(carrito);
    ejecutarBotones();
}

console.log(carrito);
function calcularCantidad(index)
{
    carrito[index].cantidad++;
    carrito[index].subtotal=carrito[index].precio * carrito[index].cantidad;
}


agregarAlCarritoHTML(carrito);

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
            <td>${producto.subtotal}</td>
            <td><button class="btnEliminar" id=${producto.id}>Eliminar</button></td>
        </tr>`)
    });
}
/* 

/* Local Storage para guardar la info del carrito */
function guardarCarritoStorage(arrayCarrito)
{

        localStorage.setItem('prodsEnCarrito',JSON.stringify(arrayCarrito));//lo guardo como JSON
        let prodStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));//lo paso a Obj de Javascript para mostrar
        console.log(prodStorage);//lo muestro por consola

}
/* Funcion para que me muestre la cantidad de elementos que hay en el carrito */
function carritoCant(arrayCarrito) 
{
    let iconoCarrito = document.getElementById("icono_carrito"); 
    let totalProductos = 0;
    for(let producto of arrayCarrito)
    {
        totalProductos += producto.cantidad;
    }
    iconoCarrito.innerHTML = "";
    iconoCarrito.innerHTML= `<p class="cantidadCarrito">(${totalProductos})</p>`;
}

let botonEliminar;

function ejecutarBotones()
{
    
    botonEliminar =document.querySelectorAll(".btnEliminar");
    if(carrito.length > 0)
    {
        botonEliminar.forEach(boton => {
            boton.addEventListener("click",eliminarProducto);
        });
    }  
}

if(carrito.length > 0)
{
    ejecutarBotones();
}
/* Funcion para eliminar los productos del carrito */
function eliminarProducto(event) 
{
    console.log("ENTRA");
    let index =carrito.findIndex(producto => producto.id == event.target.id);
    carrito.splice(index,1);
    event.target.parentNode.parentNode.remove();
    localStorage.setItem("prodsEncarrito",JSON.stringify(carrito));
} 


    