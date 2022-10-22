import {Todo} from './ls.js';

let toDoList = [];
export function createNewTask(){
    let content = document.getElementById("addTodo").value;
    let newTask = new Todo(content);
    toDoList.push(newTask);

	var listItem=document.createElement("li");
    listItem.setAttribute("id",newTask.id);
    listItem.setAttribute("class",newTask.done);
	var checkBox=document.createElement("input");
    var label=document.createElement("label");
	var deleteButton=document.createElement("button");
	label.innerText=content;
	checkBox.type="checkbox";
    checkBox.addEventListener("click",completeTask);
	deleteButton.innerText="Delete";
	deleteButton.className="delete";
    deleteButton.addEventListener("click",deleteTask);
    listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(deleteButton);
    document.getElementById("tasks").append(listItem)
    document.getElementById("addTodo").value = '';
};

export function deleteTask(){
    let itemId = event.target.parentNode.id;
    for (let i = 0; i < toDoList.length; i++){
        if (toDoList[i].id ==itemId){
            toDoList.splice(i,1);
        }
    }
    document.getElementById(itemId).remove();
};

export function completeTask(){
    let itemId = event.target.parentNode.id;
    if(document.getElementById(itemId).firstChild.checked){
        for (let i = 0; i < toDoList.length; i++){
            if (toDoList[i].id == itemId){
                toDoList[i].done = true;
                document.getElementById(itemId).className = true;
            }
        }
    }
    else{
        for (let i = 0; i < toDoList.length; i++){
            if (toDoList[i].id == itemId){
                toDoList[i].done = false;
                document.getElementById(itemId).className = false;
            }
        }
    }
};

export function displayAll(){
    let falsy = document.getElementsByClassName('false');
    let truthy = document.getElementsByClassName('true');
    for (let i = 0; i < falsy.length; i++){
        falsy[i].style.display = "block";
    }
    for (let i = 0; i < truthy.length; i++){
        truthy[i].style.display = "block";
    }
    
}

export function displayActive(){
    let falsy = document.getElementsByClassName('false');
    let truthy = document.getElementsByClassName('true');
    for (let i = 0; i < falsy.length; i++){
        falsy[i].style.display = "block";
    }
    for (let i = 0; i < truthy.length; i++){
        truthy[i].style.display = "none";
    }
}
export function displayCompleted(){
    let falsy = document.getElementsByClassName('false');
    let truthy = document.getElementsByClassName('true');
    for (let i = 0; i < falsy.length; i++){
        falsy[i].style.display = "none";
    }
    for (let i = 0; i < truthy.length; i++){
        truthy[i].style.display = "block";
    }
}
