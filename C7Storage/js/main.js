//CLAVE y VALOR
localStorage.setItem('bienvenido','Coder');
localStorage.setItem('boolean',true);
localStorage.setItem('numero',10);
localStorage.setItem('seleccionados',[1,2,3]);
//-----------------------------------------------------------------
let valor= localStorage.getItem('boolean'); //se busca por la CLAVE
let nro= localStorage.getItem('numero');
//console.log(parseInt(nro));
let lista = localStorage.getItem('seleccionados').split(",");
//console.log(lista);

for(let i=0; i<localStorage.length; i++)
{
    let clave= localStorage.key(i);
    console.log("clave" + clave);
    console.log("valor" + localStorage.getItem(clave));
}