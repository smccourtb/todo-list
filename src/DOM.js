import {Task} from "./task.js"
import {Project} from "./project.js"
import {ProjectList} from "./project-list.js"



const showTasks = (project) => {
    const taskList = document.querySelector(".task-list")
    for (let task of project.taskList) {
        const newLi = document.createaElement("li");
        newLi.textContent = task.getName();
        taskList.append(taskList);
    }
}





const setupEventListeners = (() => {
    console.log(" below should be current project")
    console.log(ProjectList.currentProject)
    const setupTaskInputListener = ((project) => {
        const newTaskInput = document.querySelector(".project-preview")
        newTaskInput.addEventListener("keyup", function(event) {
            if (event.key !== "Enter") return;
            Project.currentProject.addTask(project);
        })
    })();
    const userProjectsEventListeners = (() => {
        // get DOM elements
        const addProjectInput = document.getElementById("input-add-project-popup");
        const addProjectButton = document.querySelector(".add-project-button");
        const addProjectPopup = document.querySelector(".add-project-popup");
        addProjectInput.setAttribute("placeholder", "Add a new project.")
        // add event listeners
        addProjectButton.addEventListener("click", () => {
            addProjectPopup.classList.toggle("add-project-popup-show");
        })
        addProjectInput.addEventListener("keyup", function(event) {
            if(event.key !== "Enter") return;
                const project = Project(addProjectInput.value);
                addProjectInput.value = "";
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
    })();

})()

const createNewTask = project => {
    const newTask = new Task(newTaskInput.value)
    project.addTask(newTask)
    newTaskInput.value = ""
}

export {setupEventListeners}

//get list of default projects (inbox, today, upcoming)
// add event listeners to links of default projects and add the loadProject function