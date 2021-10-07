/* Cecilia Zucchino */

let CLP=parseInt(document.getElementById('clp').value);

/* Pasar de CLP a USD */

const toUSD = function () { return CLP / 811.70 }; /* ESTO NO ME ANDA */


/* PAsar de USD a ARS */
function  usdToArs()
{
    /* Paso 2 : Pasar de USD a ARS */
    let ars = toUSD() * 98.8;
    /* Paso 3: Calcular impuesto */
    let imp= ars * 0.65;
    /* Paso 4 : Sumar el valor del impuesto al valor en ARS */
    let total= ars + imp;
    alert("El importe en pesos Argentinos (ARS) es : " + Math.round(total) + " $ de los cuales " + Math.round(imp) + "$ son de impuestos"); 
}

function arsToClp ()
{
    let ARS=parseInt(document.getElementById('ars').value);
    let usd= ARS / 98.5130; /* Este valor tendria que ser dinamico consultando un WS */
    let clp= usd * 811.70; /* Este valor tendria que ser dinamico consultando un WS */ 
    alert("El importe en pesos Chilenos (CLP) es : " + Math.round(clp));
}