/* Cecilia Zucchino */
class Producto
{
    constructor (nombre,precio)
    {
        this.nombre=nombre,
        this.precio=precio
    }
}

const listaProductos=[];
const prod1=new Producto("Arroz",500);
const prod2=new Producto("Yerba",550);
const prod3=new Producto("Pan",50);
const prod4=new Producto("Leche",100);
listaProductos.push(prod1);
listaProductos.push(prod2);
listaProductos.push(prod3);
listaProductos.push(prod4);
//Ordenar por precio de menor a mayor
//console.log(listaProductos.sort(((a, b) => a.precio - b.precio)));
//De mayor a menor
//console.log(listaProductos.sort(((a, b) => b.precio - a.precio)));
//Esto es lo mismo
console.log(listaProductos.sort(((a, b) => b.precio > a.precio)));