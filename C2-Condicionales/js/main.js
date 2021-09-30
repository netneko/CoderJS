/* Cecilia Zucchino */
function  calcularIMC ()
{
    var peso=parseInt(document.getElementById('peso').value);
    console.log(peso);
    var altura=parseInt(document.getElementById('altura').value);
    let alt=altura / 100;
    let IMC= peso / (alt * alt);
    let clasif;
    if(IMC < 18.49)
    {
        clasif='Peso bajo';
    }
    else if (IMC < 24.9)
    {
        clasif='Peso normal';
    }
    else if((IMC > 25)&&(IMC < 29.9))
    {
        clasif='Sobrepeso';
    }
    else
    {
        clasif='Obesidad';
    }
    alert("Su IMC es : " + IMC + " y estas con : " + clasif); 
}

