/* Cecilia Zucchino */

let divProductos=document.getElementById("productos");

for(let producto of productos)
{
    let div = document.createElement("div");

    div.innerHTML = `<div class="contProd">
    <img src="${producto.imagen}" alt="imagen de producto" class="contProd__img">
    <h5 class="contProd__titulo">${producto.nombre}</h5>
    <div class="contPrecio">
        <h5 class="contPrecio__precio">${producto.precio}</h5>
        <button class="contPrecio__boton" id="btnComprar"> Comprar</button>
    </div>
</div>`
divProductos.appendChild(div);
} 

//let boton=document.getElementById("btnComprar");
//const arregloBotones=document.getElementById("contPrecio__boton");
//aca tengo que hacer un for each porque esto me devuelve un arreglo de botones
//boton.addEventListener("click",agregarAlCarrito);
//function agregarAlCarrito()
//{
   // console.log("Agrego al carrito");
//} //Me hace la accion solo para el primer boton. Supongo que esto es porque el id es unico pero el getElmentByClassName no anda

