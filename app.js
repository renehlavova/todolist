// Create a list of TODOs

function newElement() {
    const taskInput = document.querySelector(".task-input input")
    
    taskInput.addEventListener("keyup", e => {
        let userTask = taskInput.value.trim();
        if(e.key == "Enter" && userTask) {
            let todos = localStorage.getItem("todo-list");
            if(!todos) { // if empty
            todos = [];
            }
        }
    })
};