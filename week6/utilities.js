var taskInput=document.getElementById("new-task");
var addButton=document.getElementsByTagName("button")[0];
var allTaskHolder = document.getElementById("tasks");
var incompleteTaskHolder=document.getElementById("incomplete-tasks");
var completedTasksHolder=document.getElementById("completed-tasks");
var allButton = document.getElementById('filterall');
allButton.addEventListener("click", displayAll);
var activeButton = document.getElementById('filteractive');
activeButton.addEventListener("click",displayActive);
var completedButton = document.getElementById('filtercompleted');
completedButton.addEventListener("click",displayCompleted);

function displayAll(){
    document.getElementById("incomplete-tasks").style.display = "block";
    document.getElementById("completed-tasks").style.display = "block";
}
function displayActive(){
    document.getElementById("incomplete-tasks").style.display = "block";
    document.getElementById("completed-tasks").style.display = "none";
}
function displayCompleted(){
    document.getElementById("incomplete-tasks").style.display = "none";
    document.getElementById("completed-tasks").style.display = "block";
}

function createNewTaskElement(taskString){

	var listItem=document.createElement("li");
	var checkBox=document.createElement("input");
    var label=document.createElement("label");
	var editInput=document.createElement("input");
	var editButton=document.createElement("button");
	var deleteButton=document.createElement("button");
	label.innerText=taskString;
	checkBox.type="checkbox";
	editInput.type="text";
    editButton.innerText="Edit";
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



function addTask(){
	var listItem=createNewTaskElement(taskInput.value);
	incompleteTaskHolder.appendChild(listItem);
	bindsTaskEvents(listItem, taskCompleted);
	taskInput.value="";
}

function editTask(){
var listItem=this.parentNode;
var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");

		if(containsClass){
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}
		listItem.classList.toggle("editMode");
}




function deleteTask(){
		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		ul.removeChild(listItem);

}

function taskCompleted(){
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindsTaskEvents(listItem, taskIncomplete);
}


function taskIncomplete(){
	var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
		bindsTaskEvents(listItem,taskCompleted);
}



addButton.onclick=addTask;
addButton.addEventListener("click",addTask);


function bindsTaskEvents(taskListItem,checkBoxEventHandler){
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");
			editButton.onclick=editTask;
			deleteButton.onclick=deleteTask;
			checkBox.onchange=checkBoxEventHandler;
}
	for (var i=0; i<incompleteTaskHolder.children.length;i++){
		bindsTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}

	for (var i=0; i<completedTasksHolder.children.length;i++){
		bindsTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}
