import {Task} from "./task.js"
import {Project} from "./project.js"
// import Add from "./add/svg"

// const taskInput = () => {
//     // get project name
//     const name = "Inbox"
//     const main = document.querySelector(".content");
//     const form = document.createElement("form");
//     console.log(name)
//     // create an input element for title
//     const tInput = document.createElement('input');
//     tInput.setAttribute("type", "text");
//     tInput.setAttribute("name", "title");
//     tInput.setAttribute('id', "title")
//     tInput.setAttribute("placeholder", `Add task to "${name}". press Enter to save.`);
//     tInput.addEventListener("keyup", function(event) {
//         if(event.key !== "Enter") return;
//             const newTask = new Task(tInput.value)
//             tInput.value = ""
//             event.preventDefault();
//             return newTask
//     })
//     // form.append(tInput)
//     main.append(tInput)
// }

const showTasks = (project) => {
    const taskList = document.querySelector(".task-list")
    for (let task of project.taskList) {
        const newLi = document.createaElement("li");
        newLi.textContent = task.getName();
        taskList.append(taskList);
    }
}

const userProjectsEventListeners = () => {
    // get DOM elements
    const newProject = document.getElementById("input-add-project-popup");
    const addProjectButton = document.querySelector(".add-project-button");
    const addProjectPopup = document.querySelector(".add-project-popup");
    newProject.setAttribute("placeholder", "Add a new project.")
    // add event listeners
    addProjectButton.addEventListener("click", () => {
        addProjectPopup.classList.toggle("add-project-popup-show");
    })
    newProject.addEventListener("keyup", function(event) {
        if(event.key !== "Enter") return;
            const project = Project(newProject.value);
            newProject.value = "";
            addProjectPopup.classList.remove("add-project-popup-show");
            addProjectPopup.classList.add("add-project-popup");
            event.preventDefault();
            console.log(project.getName())
            const userProjectBtn = document.createElement('button')
            userProjectBtn.textContent = project.getName()
            const nav = document.querySelector("nav")
            nav.append(userProjectBtn)
            // load the project page
    })
}


const setupTaskInputListener = (project) => {
    const newTaskInput = document.querySelector(".project-preview")
    newTaskInput.addEventListener("keyup", function(event) {
        if (event.key !== "Enter") return;
        createNewTask(project);
    })
}

const createNewTask = project => {
    const newTask = new Task(newTaskInput.value)
    project.addTask(newTask)
    newTaskInput.value = ""
}

export {showTasks}

//get list of default projects (inbox, today, upcoming)
// add event listeners to links of default projects and add the loadProject function