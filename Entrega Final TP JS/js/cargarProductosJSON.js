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
            let datos = respuesta;
            cargarProductos(datos);
            localStorage.setItem("datos",JSON.stringify(datos));
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
    $('#productos').html("");
    for(let producto of datos)
    {
        $('#productos').append(`<div class="contProd">
        <img src="${producto.imagen}" alt="${producto.id}" class="contProd__img">
        <h5 class="contProd__titulo">${producto.nombre}</h5>
        <div class="contPrecio">
            <h5 class="contPrecio__precio"> <span> $ </span>${producto.precio}</h5>
            <button class="contPrecio__boton" id="btnComprar"> Comprar</button>
        </div>
        </div>`);
    }
}

let datosLocales;

if(JSON.parse(localStorage.getItem("datos"))!=null)
{
     datosLocales = JSON.parse(localStorage.getItem("datos"));
}
//Traigo los botones
//les agrego un evento
//boton sales
let btnSales =document.getElementById("sales");
btnSales.addEventListener("click",filtrarSales);

//boton conservas
let btnConservas =document.getElementById("conservas");
btnConservas.addEventListener("click",filtrarConservas);

//boton rubs
let btnRubs =document.getElementById("rubs");
btnRubs.addEventListener("click",filtrarRubs);

//boton vodkas
let btnVodkas =document.getElementById("vodkas");
btnRubs.addEventListener("click",filtrarVodkas);

//funciones para filtrar
//sales
function filtrarSales()
{
    let arraySales = datosLocales.filter((producto) => producto.nombre == "Sales");
    cargarProductos(arraySales);
}

//conservas
function filtrarConservas()
{
    let arrayConservas = datosLocales.filter((producto) => producto.nombre == "Conservas");
    cargarProductos(arrayConservas);
}

//rubs
function filtrarRubs()
{
    let arrayRubs = datosLocales.filter((producto) => producto.nombre == "Rubs para pollo o pescado");
    cargarProductos(arrayRubs);
}

//vodkas
function filtrarVodkas()
{
    let arrayVodkas = datosLocales.filter((producto) => producto.nombre == "Vodkas");
    cargarProductos(arrayVodkas);
}


let mayor=document.querySelector("#mayor");
mayor.addEventListener('click',ordenarMayorAMenor);


function ordenarMayorAMenor() {
    let arrayOrdenado = [];

    arrayOrdenado = datosLocales.sort((a, b) => b.precio - a.precio);
    cargarProductos(arrayOrdenado);


}