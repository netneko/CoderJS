/* Cecilia Zucchino */
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
    while (!producto || producto > 8) 
    {
        producto= parseInt(prompt("Que producto desea comprar?\n 1: Sal Malbec, romero y cebolla (200$) \n 2: Sal Asiática ($200) \n 3: Sal cítrica ($200) \n 4: Oriental 7 especias ($200) \n 5: Pimentón Ahumado ($200) \n 6: Chucrut ($350) \n 7: Pepinos agridulces ($350) \n 8: Morrones asados ($350) \n "));
    } 
    switch (producto) 
        {
            case 1:
                producto= "Malbec, romero y cebolla";
                precio= 200;
                break;
            case 2:
                producto= "Sal Asiática";
                precio= 200;        
            case 3:
                producto= "Sal cítrica";
                precio= 200;
                break;
            case 4:
                producto= "Oriental 7 especias";
                precio= 200;
                break;
            case 5:
                producto= "Pimentón Ahumado";
                precio= 200;
                break;
            case 6:
                producto= "Chucrut";
                precio= 350;
                break;
            case 7:
                producto= "Pepinos agridulces";
                precio= 350;
                break;
            case 8:
                producto= "Morrones asados";
                precio= 350;
                break;
            /*  case 9:
                producto= "Ajo confitado";
                precio= 350;
                break;
            case 10:
                producto= "Borsch";
                precio= 350;
                break;
            case 11:
                producto= "Mix de hongos";
                precio= 350; 
                break;  
            break;
            case 12:
                producto= "Picada";
                precio= 350;
                break;  
            case 13:
                producto= "Vodka Citrinello";
                precio= 400;
                break;   
            case 14:
                producto= "Wodka poloca especiado";
                precio= 400;    
                break;
            case 15:
                producto= "Wodka sabor frutilla";
                precio= 400;    
                break;
            case 16:
                producto= "Wodka sabor Melón";
                precio= 350;    
                break;                 */                                      
        }
        console.log(precio);
    
        while (!cantidad || cantidad == 0)
        {
            cantidad= parseInt(prompt("Producto elegido : " + producto + "\n Introduzca la cantidad deseada"))
        }
        console.log(cantidad);
        return new Pedido(producto,precio,cantidad);
}

const pedido= tomarPedido();
pedido.calcularSubtotal();
pedido.calcularEnvio();
pedido.calcularIVA();
pedido.calcularTotal();

alert("Detalle del pedido \n"+ pedido.producto + "\n Cantidad " + pedido.cantidad + "\n SubTotal " + pedido.subTotal + "\n Envio " + pedido.envio
+ "\n Total " + pedido.total);