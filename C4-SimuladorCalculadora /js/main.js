/* Cecilia Zucchino */
function  clpToArs ()
{
    let clp=parseInt(document.getElementById('clp').value);
    /* Paso 1: Pasar CLP a USD */
    let usd = clp / 811.70; /* Este valor tendria que ser dinamico consultando un WS */ 
    /* Paso 2 : Pasar de USD a ARS */
    let ars= usd * 98.5130 /* Este valor tendria que ser dinamico consultando un WS */
    /* Paso 3: Calcular impuesto */
    let imp= ars * 0.65;
    /* Paso 4 : Sumar el valor del impuesto al valor en ARS */
    let total= ars + imp;
    alert("El importe en pesos Argentinos (ARS) es : " + Math.round(total) + " $ de los cuales " + Math.round(imp) + "$ son de impuestos"); 
}

function arsToClp ()
{
    let ars=parseInt(document.getElementById('ars').value);
    let usd= ars / 105.200; /* Este valor tendria que ser dinamico consultando un WS */
    let clp= usd * 819; /* Este valor tendria que ser dinamico consultando un WS */ 
    alert("El importe en pesos Chilenos (CLP) es : " + Math.round(clp));
}


/* Una funcion para esuchar el evento del click del boton */

/* Una funcion para agregar dinamicamente el resultado */
/* Una funcion para consultar una API con el valor del dolar */