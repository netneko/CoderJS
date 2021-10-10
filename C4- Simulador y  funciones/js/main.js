
function clpToUSD (clp)
{ 
    return clp / 811.70; 
}


function  clpToArs ()
{
    var clp=parseInt(document.getElementById('clp').value);
    let USD= clpToUSD(clp);
    let ars= USD * 98.5130 
    let imp= ars * 0.65;
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