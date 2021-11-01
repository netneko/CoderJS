/* Cecilia Zucchino */
const carrito=[];
const botonesComprar= document.querySelectorAll(".contPrecio__boton");//Esto me devuelve los 4 botones
console.log(botonesComprar);
botonesComprar.forEach(btnAgregar =>
    {
        btnAgregar.addEventListener("click",agregarSeleccionado)//Por cada boton agrego un addEventiListener
    })


const tableBody=document.querySelector('.tBody');//trae el table body

function agregarSeleccionado(event)
{
    let tituloP=event.target.parentNode.parentNode.children[1].textContent;//busco el titulo del producto
    let precioP=event.target.parentNode.children[0].textContent;//busco el precio del producto
    let producto = new Producto (tituloP,precioP)//creo un objeto producto
    carrito.push(producto); //agrego el objeto producto al arreglo
    agregarAlCarrito(carrito);//llamo a la funcion para agregar el producto al carrito y mostrarlo en html
}

function agregarAlCarrito(array)
{
    tableBody.innerHTML="";//lo inicliazo vacio para que no me agregue mas de una fila cuando entra al foreach
    array.forEach ((producto) => { //Por cada objeto del arreglo
    let tr=document.createElement('tr'); //creo una fila y a esa fila le agrego lo que esta en ``
    tr.innerHTML= `<td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>1</td>`
    tableBody.appendChild(tr);//agrego el contenido al html
})

}