//Para traer los datos del JSON
const productos =new Array();
const URLJSON = "js/listaProductos.json"


getElements();



 function getElements()
{
    $.getJSON(URLJSON,function(respuesta,estado)
    {
        if(estado === "success")
        {
            console.log("hola");
            let datos = respuesta;
            console.log(datos);
           /*  for(const dato of datos)
            { console.log(dato);
                let prod = new Producto(dato);
                productos.push(prod);
                
            }  */
            cargarProductos(datos);
        }
            else
            {
                console.log(estado);
            }
    })
}

//Carga de productos dinamicamente en la pagina
function cargarProductos(datos)
{
    for(let producto of datos)
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