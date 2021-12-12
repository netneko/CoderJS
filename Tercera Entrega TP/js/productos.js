class Producto{
    constructor(nombre,precio,id,subtotal)
    {
        this.nombre=nombre,
        this.precio=precio,
        this.id=id,
        this.cantidad=1,
        this.subtotal=precio
    }

    calcularIVA()
    {
        return this.precio * 1.21;
    }

    calcularSubtotal()
    {
        return this.precio * this.cantidad;
    }
    
}
const productos = 
[
    {
        nombre:"Sales",
        precio:"$300",
        imagen:"./img/imagenesPP/salesPP.svg",
        id:1
    },
    {
        nombre:"Rubs para pollo o pescado",
        precio:"$350",
        imagen:"./img/imagenesPP/salesPP.svg",
        id:2
    },
    {
        nombre:"Vodkas",
        precio:"$400",
        imagen:"./img/imagenesPP/vodkasPP.svg",
        id:3
    },
    {
        nombre:"Conservas",
        precio:"$400",
        imagen:"./img/imagenesPP/conservasPP.svg",
        id:4
    }
]