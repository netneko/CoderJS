/* Cecilia Zucchino */

let carritoLocalStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));
let carrito;

//Si el carrito tenia guardado algo, lo levanto del local storage
if(carritoLocalStorage){
    carrito = carritoLocalStorage;
    carritoCant(carrito);
}else{
    carrito = [];
}

 /* Forma corta del document ready */
 /* Mostrar mensaje cada vez que se agrega algo al carrito */
$(() => {
    $(".contPrecio__boton").on('click',agregarAlCarrito); /* Le agrego el evnto a cada boton y llamo al agregarSeleccionado con un click */
    $(".divMensaje").prepend('<h6  class="msj" style="display: none" >Ya esás más cerca de hacer comidas más ricas!</h3>');
    $(".contPrecio__boton").on('click',mostrarMensaje);
    $(".btnEliminar").on('click',eliminarProducto);
});


/* Funcion agregar productos seleccionados al arreglo de Carrito */
function agregarAlCarrito(event)
{

    let tituloP=event.target.parentNode.parentNode.children[1].textContent;//busco el titulo del producto
    let precioP=Number(event.target.parentNode.children[0].textContent.replace('$',''));//busco el precio del producto--let precioP=event.target.parentNode.children[0].children[0].textContent;
    let idP=event.target.parentNode.parentNode.children[0].alt;//con esto busco el id
    console.log(precioP);
            let index=carrito.findIndex(producto => producto.id === idP);//me fijo si el producto con el id del localstorage esigual al del clickeado
            if(index == -1)//si no existe agrego  un nuevo prod con ese id al carrito
            {
                let producto = new Producto (tituloP,precioP,idP)//creo un objeto producto
                carrito.push(producto); //agrego el objeto producto al arreglo
            }
            else 
            {
                calcularCantidad(index); //Si el prod ya existe llamo a la funcion calcularCantidad para que la incremente
                calcularSubtotal(index);
                console.log(carrito);
            }
    agregarAlCarritoHTML(carrito);//llamo a la funcion para agregar el producto al carrito y mostrarlo en html
    guardarCarritoStorage(carrito);
    carritoCant(carrito); //actualizo la cantidad de items del carrito
    ejecutarBotones();
}

//funcion para incrementar la cantidad de productos
function calcularCantidad(index)
{
    carrito[index].cantidad++;
}

//funcion para calcular el subtotal por producto
function calcularSubtotal(index)
{
    carrito[index].subtotal=parseInt(carrito[index].precio) * carrito[index].cantidad;
}
agregarAlCarritoHTML(carrito);

/* Agregar items al carrito en el HTML */
function agregarAlCarritoHTML(arrayCarrito)
{
    $("#tBody").html("");//lo inicializo vacio para que no me agregue mas de una fila cuando entra al foreach
    finalizarCompraBoton(carrito);
    arrayCarrito.forEach ((producto) => 
    { //Por cada objeto del arreglo
        $("#tBody").append(`
        <tr>
            <td>${producto.nombre}</td>
            <td><span> $ </span>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td><span> $ <span> ${producto.subtotal}</td>
            <td><button class="btnEliminar" id=${producto.id}>Eliminar</button></td>
        </tr>`)
    });
    
}



//Si el carrito no esta vacio, le agrego un boton de finalizar compra
function finalizarCompraBoton(arrayCarrito)
{
    if(arrayCarrito.length > 0)
    {
        $(".finCarrito").append(`<button class="btnFinalizar"> Finalizar Compra </button>`);
        totalCompra(carrito);
    }
}

//funcion para mostar el total del carrito
function totalCompra (arrayCarrito)
{
    let totalCarrito = 0;
    //recorrer array carrito y por cada elemento sumar su subtotal
    for (let producto of arrayCarrito)
    {
        totalCarrito += producto.subtotal;
    }
    $(".totalCarrito").append(`<span> Total carrito : ${totalCarrito}</span>`);
    //agregar en totalCarrito con un append
}


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
    iconoCarrito.innerHTML= `<span class="cantidadCarrito">(${totalProductos})</span>`;
}

let botonEliminar;

//agrego un evento a cada uno de los botones (si el carrito no esta vacio)
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
    let index =carrito.findIndex(producto => producto.id == event.target.id);
    carrito.splice(index,1);
    event.target.parentNode.parentNode.remove();
    restarCarritoCant(carrito);
    //restarTotalCompra(carrito);
    localStorage.setItem("prodsEncarrito",JSON.stringify(carrito));
    
} 

//funcion restar cantidad del carrito
function restarCarritoCant(arrayCarrito) 
{
    let iconoCarrito = document.getElementById("icono_carrito"); 
    let cantidadCarito = carritoCant(arrayCarrito) - 1;
    carritoCant(arrayCarrito);
}
//funcion restar del total de la compra
function restarTotalCompra (arrayCarrito)
{
    let totalCarrito = 0;
    //recorrer array carrito y por cada elemento sumar su subtotal
    for (let producto of arrayCarrito)
    {
        totalCarrito = producto.subtotal --;
    }
    $(".totalCarrito").append(`<span> Total carrito : ${totalCarrito}</span>`);
    //agregar en totalCarrito con un append
}


//Update carrito?
//Me falta que cuando elimino un producto del carrito
//Se actualize el precio total
//Se actualize la cantidad de elementos del carrito