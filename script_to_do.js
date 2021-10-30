let newTodo = document.getElementById("todo");
let addBtn = document.getElementById("addTodo");
let todoList = document.getElementById("todoList");


let arreglo_items = new Array();
arreglo_items.push("Sacar al perro");
arreglo_items.push("Cocinar");
arreglo_items.push("Leer un libro");

cargarLista();

function cargarLista(){

    for (let i = 0; i < arreglo_items.length;i++){

            let item = arreglo_items[i];
            addTodo(item);

    }


}


function addTodo(item){


    let li = document.createElement("li");
    li.textContent = item;

    li.addEventListener("click",()=>{

        if (li.style.textDecoration === "line-through"){

            li.style.textDecoration = 'none';

        }else{

            li.style.textDecoration = 'line-through';

        }

    })

    todoList.appendChild(li);



}

addBtn.addEventListener("click",() =>{

    addTodo(newTodo.value);
    newTodo.value = "";



})


newTodo.addEventListener('keypress',(event)=>{


    if (event.keyCode === 13){
        
        addTodo(newTodo.value);
        newTodo.value = "";

    }


})


