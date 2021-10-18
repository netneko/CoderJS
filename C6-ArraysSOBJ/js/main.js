/* Cecilia Zucchino */
function  calcularIMC ()
{
    const nombreArray=[];
    var nombreForm=(document.getElementById('nombre').value);
    nombreArray.push(nombreForm);
    console.log(nombreArray);
    var peso=parseInt(document.getElementById('peso').value);
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
    alert(" " + nombreArray + " su IMC es : " + IMC + " y estas con : " + clasif); 
}

