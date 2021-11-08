/* Cecilia Zucchino */
for(let producto of productos)
{
    
$('#productos').append(`<div class="contProd">
<img src="${producto.imagen}" alt="imagen de producto" class="contProd__img">
<h5 class="contProd__titulo">${producto.nombre}</h5>
<div class="contPrecio">
    <h5 class="contPrecio__precio">${producto.precio}</h5>
    <button class="contPrecio__boton" id="btnComprar"> Comprar</button>
</div>
</div>`);

}

