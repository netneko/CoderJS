class Producto
{
    constructor(nombre, precio, cantidad) 
    {
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}
 const listaProductos=[];
const prod1=new Producto("Arroz",100,1);
const prod2=new Producto("Fideos",150,2);
listaProductos.push(prod1);
listaProductos.push(prod2);

console.log(listaProductos);

for(const productos of listaProductos)
{
    console.log(productos.nombre);
} 

/* const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
} */
