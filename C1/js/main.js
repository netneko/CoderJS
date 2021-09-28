
var peso=parseInt(prompt("Ingrese su peso"));
var altura=parseInt(prompt("Ingrese su  altura en cm. Por ejemplo 175 o 165 cm"));

function  calcularIMC (peso,altura)
{
    let alt=altura / 100;
    let IMC= peso / (alt * alt); 
    return IMC;
}

var IMC =calcularIMC(peso,altura);
alert("Su IMC es : " + IMC); 