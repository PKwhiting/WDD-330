import {createNewTask,deleteTask,completeTask,displayActive,displayAll,displayCompleted} from './ToDos.js';

document.getElementById("filterall").addEventListener("click",displayAll);
document.getElementById("filteractive").addEventListener("click",displayActive);
document.getElementById("filtercompleted").addEventListener("click",displayCompleted);
document.getElementById("submitbutton").addEventListener('click', createNewTask);
