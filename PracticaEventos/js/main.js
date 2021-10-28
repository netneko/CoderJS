//1- Creo variables para guardar los elementos del HTML
let newTodo = document.getElementById("todo"); //caja de input
let addBtn = document.getElementById("addTodo"); //boton
let todoList = document.getElementById("todoList"); //lista vacia

//3- Hago una funcion para que me vaya escribiendo lo ingresado en un item (li)
//tambien hago un IF ELSE para que si hago click se tache y viceversa
//Finalmente y lo mas iportante agrego el item LI a la lista con el appenChild
function addTodo(item)
{
    let li = document.createElement("li");
    li.textContent=item;
        li.addEventListener("click",() =>
        {
            if(li.style.textDecoration === "line-through")
            {
                li.style.textDecoration = 'none';
            }
            else
            {
                li.style.textDecoration = "line-through";
            }
        })
        todoList.appendChild(li);
}

//2- Hago una funcion para agregar el valor que se ingresa en el input (newTodo). OJO que es value con minuscula
// y despues se resetea el input

addBtn.addEventListener("click",() =>
{
        addTodo(newTodo.value);
        newTodo.value= "";
    })