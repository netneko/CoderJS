let div= document.getElementById('divej');
let divs= document.getElementsByTagName('div');
let p=document.getElementsByTagName('p');

console.log(div.innerHTML)
console.log(divs.innerHTML)

let parrafo= document.createElement("p"); //creo el elemento

parrafo.innerHTML= "<h2>Hola coder </h2>"; //le agrego el contenido
document.body.appendChild(parrafo); //lo agrego al body. Lo agrega al final del body
p.parentNode.removeChild(div);