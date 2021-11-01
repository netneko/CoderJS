/* Cecilia Zucchino */
const botonesComprar= document.querySelectorAll(".contPrecio__boton");//Esto me devuelve los 4 botones
console.log(botonesComprar);
botonesComprar.forEach(btnAgregar =>
    {
        btnAgregar.addEventListener("click",agregarSeleccionado)
    })
const containerCarrito=document.querySelector('.containerCarrito');//trae el DIV que tiene la tabla

function agregarSeleccionado(event)
{
    const btn = event.target;
    const item = btn.closest('.contProd');//devuelve el contenido del nodo mas cercano al parametro
   // console.log(item); //esto me devuelve todo el contenedor del boton al que hice click
    const tituloProd = item.querySelector('.contProd__titulo').textContent; //devuelve el conteniedo del item con la clase pasada por parametro
    const precioProd=item.querySelector('.contPrecio__precio').textContent
    console.log(tituloProd, precioProd);
    agregarAlCarrito(tituloProd,precioProd) ;
    
}

function agregarAlCarrito(tituloProd,precioProd)
{
    const filaCarrito=document.createElement('div');//creo una fila de la tabla
    const carritodeCompras =`               
    <tbody>
    <td>${tituloProd}</td>
    <td>${precioProd}</td>
    <td>1</td>
    </tbody>`
    
    ;//creo una variable que contiene el conteniedo dinamico en forma de fila
filaCarrito.innerHTML= carritodeCompras;//le agrego a la fila del carrito creada el contenido dinamico
containerCarrito.appendChild(filaCarrito);//agrego la fila al container

}