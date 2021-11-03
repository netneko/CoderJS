//LOCAL STORAGE
//SETEO CLAVE Y VALOR
localStorage.setItem('Esto es una clave',10);
//MUESTRO por pantalla pasando por parametro LA CLAVE y me va mostrar el VALOR
console.log(localStorage.getItem('Esto es una clave'));
//esto elimina UN DATO . PASO CLAVE y me borra el valor
localStorage.removeItem('Esto es una clave');
//ESTO ME BORRA TODO
localStorage.clear();

//SESSION STORAGE
//AGREGO UN DATO
//sessionStorage.setItem('clave de sesion',15);
//BORRO UN DATO
//sessionStorage.clear();
//GUARDAR JSON
//Defino objeto
//const objeto = {nombre: 'Pablo', edad:29}
//guardo objeto en el local storage
//localStorage.setItem('objeto',objeto);
//lo paso a JSON
//const objetoJSON=JSON.stringify(objeto);
//lo guardo en el local storage
//localStorage.setItem('objetoJSON',objetoJSON);

//Convertirlo de nuevo en un OBJETO de JAVASCRIPT
//es mas comodo para trabajarlo
/* const objStorage= localStorage.getItem('objetoJSON');
const objetoJS= JSON.parse(objStorage);
console.log(objetoJS.nombre); *///obtenego el nombre del objeto en objeto de JS

const productos = [{name:"pan",price:220},
{nombre:"leche",price:30},
{nombre:"agua",price: 100}];

const carrito=[];

carrito.push(productos[0]);
carrito.push(productos[1]);
carrito.push(productos[2]);
console.log(carrito);

if (carrito.length!=0)
{
    localStorage.setItem('prodsEnCarrito',JSON.stringify(carrito));
}
else if(localStorage.length >0)
{
    const prodStorage= JSON.parse(localStorage.getItem('prodsEnCarrito'));
    console.log(prodStorage);
}








