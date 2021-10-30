class Usuario
{
    constructor(nombre,pass,permisos)
    {
        this.nombre=nombre,
        this.pass=pass,
        this.permisos=[]
    }
}

const listaUsuarios=[];
let nombre=prompt("Ingrese nombre");

    let pass=prompt("Ingrese password");
    const permisos=prompt("Ingrese permisos");
    let usuario = new Usuario(nombre, pass,permisos);
    listaUsuarios.push(usuario);

    console.log(usuario);