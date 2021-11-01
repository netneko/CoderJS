/* Cecilia Zucchino */

const agregarAlCarrito = document.querySelectorAll(".contPrecio__boton");//Esto me devuelve los 4 botones
console.log(agregarAlCarrito);
agregarAlCarrito.forEach(btnAgregar =>
    {
        btnAgregar.addEventListener("click",agregarSeleccionado)//agrego un evento por cada boton
    })


function agregarSeleccionado(event)
{
    const btn = event.target;
    console.log(btn);
    const item = btn.closest('.contProd');
    console.log(item); //muestro por consola todo el contenedor del prod al que le hice click
}