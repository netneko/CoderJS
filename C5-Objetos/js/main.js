/* Cecilia Zucchino */
class Persona 
{
    constructor (nombre,edad, peso, altura)
    {
    this.nombre= nombre,
    this.edad= edad,
    this.peso= peso,
    this.altura= altura
    }  
}

function  calcularIMC ()
{
    let nombre= document.getElementById('nombre').value;
    let edad= parseInt(document.getElementById('edad').value);
    let peso= parseInt(document.getElementById('peso').value);
    let altura= parseInt(document.getElementById('altura').value);
    const persona1= new Persona (nombre,edad,peso,altura);
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

