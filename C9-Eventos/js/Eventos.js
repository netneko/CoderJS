
/* Cecilia Zucchino */
//Esto solo me sirve para el primer item
/* const btnComprar=document.querySelector(".contPrecio__boton");
btnComprar.addEventListener("click", () => {
    console.log("Se hizo click");
    alert("Articulo agregado al carrito");
})
 */

const agregarAlCarrito = document.querySelectorAll(".contPrecio__boton");//Esto me devuelve los 4 botones
console.log(agregarAlCarrito);
agregarAlCarrito.forEach(btnAgregar =>
    {
        btnAgregar.addEventListener("click",agregarSeleccionado)
    })


function agregarSeleccionado(event)
{
    const btn = event.target;
    console.log(btn);
    const item = btn.closest('.contProd');
    console.log(item); //esto me devuelve todo el contenedor del boton al que hice click
}