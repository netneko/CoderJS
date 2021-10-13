let producto= 0;
let cantidad= 0;
let precio= 0;

class Pedido
{
    constructor (producto,precio,cantidad)
    {
        this.producto= producto,
        this.precio= precio,
        this.cantidad= cantidad,
        this.envio= 0,
        this.subTotal= 0,
        this.total= 0
    }

    calcularSubtotal()
    {
        this.subTotal= this.precio * this.cantidad;
    }

    calcularIVA()
    {
        return this.subTotal * 0.21;
    }

    calcularEnvio()
    {
        if (this.subTotal >=2500)
        {
            this.envio= 0;
        }
        else
        {
            this.envio= 250;
        }
    }

    calcularTotal()
    {
        this.total= this.subTotal+ this.envio + this.calcularIVA();
    }
}

function tomarPedido()
{
    while (!producto) 
    {
        producto= parseInt(prompt("Que producto desdea ingresar?\n 1: Sal Romero y Malbec (200$) \n 2: Sal Asiática ($200) \n 3: Rub pollo y pescado ($250)"));
    }    

    switch (producto) 
        {
            case 1:
                producto= "Sal Romero y Malbec";
                precio= 200;
                break;
            case 2:
                producto= "Sal Asiática";
                precio= 200;        
            case 3:
                producto= "Rub Pollo y Pescado";
                precio= 250;
                break;                                      
        }
    
        while (!cantidad || cantidad == 0)
        {
            cantidad= parseInt(prompt("Producto elegido : " + producto + "\n Introduzca la cantidad deseada"))
        }
        return new Pedido(producto,precio,cantidad);
}

const pedido= tomarPedido();
pedido.calcularSubtotal;
pedido.calcularEnvio;
pedido.calcularIVA;
pedido.calcularTotal;

alert("Detalle del pedido \n"+ pedido.producto + "\n Cantidad " + pedido.cantidad + "\n SubTotal " +pedido.subTotal + "\n Total " + pedido.total);