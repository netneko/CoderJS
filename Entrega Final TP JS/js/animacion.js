$(".contPrecio__boton").css( "background-color","#6daadd");
$(".contPrecio__boton").css( "border-color","#6daadd");

function mostrarMensaje(event)
{
    
    $(".msj").show()
    $(".divMensaje").fadeIn(1000).fadeOut(2000);
}

function mostrarMensajeFinCompra (event)
{
    
    $(".MsjFin").show()
    $(".espacioMsjFin").fadeIn(1200).fadeOut(2000);

}