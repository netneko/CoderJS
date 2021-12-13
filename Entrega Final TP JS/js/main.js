/* Cecilia Zucchino */
let carritoLocalStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));
let carrito;

//Si el carrito tenia guardado algo, lo levanto del local storage
if(carritoLocalStorage){
    carrito = carritoLocalStorage;
}else{
    carrito = [];
}

//Para traer los datos del JSON
const productos =new Array();
const URLJSON = "../js/lista_productos.json";

//cargarProductos();

getElements();

function getElements()
{
    $.getJSON(URLJSON,function(respuesta,estado)
    {
        if(estado === "success")
        {
            let datos = respuesta;
            for(const dato of datos)
            { 
                let prod = new Producto(dato);
                productos.push(prod);
                cargarProductos();
            } 
        }
            else
            {
                console.log(estado);
            }
    })
}

//Carga de productos dinamicamente en la pagina
function cargarProductos()
{
    for(let producto of productos)
    {
        $('#productos').append(`<div class="contProd">
        <img src="${producto.imagen}" alt="${producto.id}" class="contProd__img">
        <h5 class="contProd__titulo">${producto.nombre}</h5>
        <div class="contPrecio">
            <h5 class="contPrecio__precio">${producto.precio}</h5>
            <button class="contPrecio__boton" id="btnComprar"> Comprar</button>
        </div>
        </div>`);
    }
}


