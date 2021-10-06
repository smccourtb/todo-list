import {Task} from "./task.js"
import {Project} from "./project.js"
// import Add from "./add/svg"

const taskInput = () => {
    // get project name
    const name = "Inbox"
    const main = document.querySelector(".content");
    const form = document.createElement("form");
    console.log(name)
    // create an input element for title
    const tInput = document.createElement('input');
    tInput.setAttribute("type", "text");
    tInput.setAttribute("name", "title");
    tInput.setAttribute('id', "title")
    tInput.setAttribute("placeholder", `Add task to "${name}". press Enter to save.`);
    tInput.addEventListener("keyup", function(event) {
        if(event.key !== "Enter") return;
            const newTask = new Task(tInput.value)
            tInput.value = ""
            event.preventDefault();
            return newTask
    })
    // form.append(tInput)
    main.append(tInput)
}

const newProject = (projectName) => {
    const project = new Project(projectName)
    return project
}

const loadDefaultProjects = () => {
    const inbox = document.querySelector(".inbox");
    const today = document.querySelector(".today");
    const upcoming = document.querySelector(".upcoming");
}

const addProject = () => {
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
    })
}

const taskList = () => {
    const main = document.querySelector(".content")
    const body = document.createElement("div")
    const tList = document.createElement("ol")

}



export {taskInput, addProject}