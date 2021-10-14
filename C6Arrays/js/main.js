/* const numeros= [1,2,3,4,5];
let suma= numeros[0] + numeros[1];
console.log(suma);




numeros.push(6);
console.log(numeros.length);
const frutas=["Frutilla","Pera","Manzana","Uva","Frambuesa"];
console.log(frutas.slice(1,3)); //Muestra pera y manzana. El primer parametro es desde y el segundo es hasta -1

const listaNombres=[];
let cantidad=5;
do{
    let entrada= prompt("Ingrese nombre");
    listaNombres.push(entrada);
    console.log(listaNombres.length);
}while(listaNombres.length!= cantidad)

for (let i=0; i < listaNombres.length; i ++)
{
    alert(listaNombres);
} */

//Arrays de objetos

/* const objeto1={id:1, producto: "Sal Malbec y Romero",precio: 250};
const objeto2={id:2, producto: "Sal Asiatica",precio: 250};
const objeto3={id:3, producto: "Sal Oriental",precio: 250};

const arrayObjetos=[objeto1,objeto2];
arrayObjetos.push(objeto3);
console.log(arrayObjetos);
for (const productos of arrayObjetos) //OJO aca el productos despues del const es algo que se define aca, puede tener cualquier nombre
{
    console.log(productos.producto);
}
 */
class Producto
{
    constructor (nombre,precio)
    {
        this.nombre=nombre,
        this.precio=precio
    }
    sumarIVA()
    {
        this.precio= this.precio * 1.21;
    }
}

const listaProductos=[];
const prod1=new Producto("Arroz",100);
const prod2=new Producto("Fideos",150);
listaProductos.push(prod1);
listaProductos.push(prod2);
listaProductos.push(new Producto("Pan",200));
for(const productos of listaProductos)
{
    listaProductos.sumarIVA;
}

console.log(listaProductos);


//metodos

const nros =[1,2,3,4,5];
const filtro1 =nros.filter(elemento => elemento> 3);
console.log(filtro1); //Me devuelve 4 y5 porque son los nros mayores a 3