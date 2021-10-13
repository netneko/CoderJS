const numeros= [1,2,3,4,5];
let suma= numeros[0] + numeros[1];
console.log(suma);

/* for (let i=0; i< 5; i ++)
{
    alert(numeros[i]);
} */


numeros.push(6);
console.log(numeros.length);
const frutas=["Frutilla","Pera","Manzana","Uva","Frambuesa"];
console.log(frutas.slice(1,3)); //Muestra pera y manzana. El primer parametro es desde y el segundo es hasta -1
