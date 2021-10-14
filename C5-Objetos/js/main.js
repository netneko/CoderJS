/* Cecilia Zucchino */
let nombre="";
let edad= 0;
let peso= 0;
let altura= 0;
let clasif="";

class Persona 
{
    constructor (nombre,edad, peso, altura)
    {
    this.nombre= nombre,
    this.edad= edad,
    this.peso= peso,
    this.altura= altura
    this.IMC=0;
    this.clasif="";
    }  

    calcularIMC()
    {
        let alt=this.altura/100;
        this.IMC=this.peso / (alt * alt);
    }

    setClasificacion()
    {
        if(this.IMC < 18.49)
        {
            this.clasif='Peso bajo';
        }
        else if (this.IMC < 24.9)
        {
            this.clasif='Peso normal';
        }
        else if((this.imc > 25)&&(IMC < 29.9))
        {
            this.clasif='Sobrepeso';
        }
        else
        {
            this.clasif='Obesidad';
        }
    }
}

function  tomarDatos()
{
    nombre= prompt("Ingrese nombre ");
    edad= parseInt(prompt("Ingrese edad"));
    peso= parseInt(prompt("Ingrese peso"));
    altura=parseInt(prompt("Ingrese altura"));
    return new Persona (nombre,edad,peso,altura); 
}
const persona= tomarDatos();
persona.calcularIMC();
persona.setClasificacion();
alert("Su IMC es : " + persona.IMC + "y estas con : " + persona.clasif); 