
function  calcularIMC ()
{
    var peso=parseInt(document.getElementById('peso').value);
    console.log(peso);
    var altura=parseInt(document.getElementById('altura').value);
    let alt=altura / 100;
    let IMC= peso / (alt * alt); 
    alert("Su IMC es : " + IMC); 
}

