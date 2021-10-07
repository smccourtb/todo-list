import {Task} from "./task.js"
import {Project} from "./project.js"
import {ProjectList} from "./project-list.js"



const showTasks = (project) => {
    const taskList = document.querySelector(".task-list")
    console.log('Im being clicked')
    console.log(project.taskList)
    //clear tasks
    taskList.replaceChildren()
    //switch current project to the one that was clicked
    ProjectList.setCurrentProject(project)
    for (let task of project.taskList) {
        console.log(task)
        const newLi = document.createElement("li");
        newLi.textContent = task.getTitle();
        taskList.append(newLi);
    }
}





const setupEventListeners = (() => {
    // setup adding new task to current project
    const setupTaskInputListener = (() => {
        const newTaskInput = document.querySelector(".add-task-input")
        newTaskInput.addEventListener("keyup", function(event) {
            if (event.key !== "Enter") return;
            ProjectList.currentProject.addTask(new Task(newTaskInput.value));
            newTaskInput.value = "";
            showTasks(ProjectList.currentProject)
        })
    })();
    // setup adding new projects
    const userProjectsEventListeners = (() => {
        // get DOM elements
        const addProjectInput = document.getElementById("input-add-project-popup");
        const addProjectButton = document.querySelector(".add-project-button");
        const addProjectPopup = document.querySelector(".add-project-popup");
        addProjectInput.setAttribute("placeholder", "Add a new project.")
        // brings up the new project input
        addProjectButton.addEventListener("click", () => {
            addProjectPopup.classList.toggle("add-project-popup-show");
        })
        // on pressing enter, new project is created then stored in ProjectList
        addProjectInput.addEventListener("keyup", function(event) {
            if(event.key !== "Enter") return;
                // creates a new project then clears input
                const project = Project(addProjectInput.value);
                addProjectInput.value = "";
                // add to ProjectList
                ProjectList.addProject(project)
                addProjectPopup.classList.toggle("add-project-popup-show");
                event.preventDefault();
                // adds a button to load the project
                const projectLink = addProjectLink(project);
                
                const nav = document.querySelector("nav")
                nav.append(projectLink)
        })
    })();

})()

const addProjectLink = (whichProject) => {
    ProjectList.currentProject = whichProject
    showTasks(whichProject)
    const userProjectBtn = document.createElement('button')
    userProjectBtn.addEventListener("click", () => {
        showTasks(whichProject)
    })
    userProjectBtn.textContent = whichProject.getName()
    return userProjectBtn
}

export {setupEventListeners}

//get list of default projects (inbox, today, upcoming)
// add event listeners to links of default projects and add the loadProject function