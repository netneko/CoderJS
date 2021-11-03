function guardarCarrito(carrito)
{
    if (carrito.length!=0) //Si el carrito no esta vacio, guardo lo que tiene adentro en el localStorage
    {
        localStorage.setItem('prodsEnCarrito',JSON.stringify(carrito));
    }
    else if(localStorage.length > 0)
        { //Si el carrito NO esta vacio, recupero los datos y los parseo de JSON a un objeto JS
            const prodStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));
            console.log(prodStorage);
        }

}



