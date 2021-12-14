/* Cecilia Zucchino */
let carritoLocalStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));
let carrito;

//Si el carrito tenia guardado algo, lo levanto del local storage
if(carritoLocalStorage){
    carrito = carritoLocalStorage;
}else{
    carrito = [];
}




