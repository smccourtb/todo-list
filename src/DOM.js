import {
    Task
} from "./task.js"
import {
    Project
} from "./project.js"
import {
    ProjectList
} from "./project-list.js"



const showTasks = (project) => {
    const taskList = document.querySelector(".task-list"); // the ol element
    const taskListContainer = document.querySelector(".project-task-list-container")
    const projectTitle = document.querySelector(".project-title")
    projectTitle.textContent = project.getName();
    //clear tasks
    taskList.replaceChildren();
    //switch current project to the one that was clicked

    for (let task of project.taskList) {
        const checkbox = document.createElement("input"); // checkbox for tasks
        const taskContainer = document.createElement("div"); // houses checkbox and the newLI
        const newLi = document.createElement("li");
        newLi.textContent = task.getTitle();
        taskContainer.classList.add("task-container");
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener("click", () => {

            if (checkbox.checked) {
                console.log('hi there');
                task.markComplete()
                project.addToCompleted(task)
                project.removeTask(task)
                showTasks(project)

            }
        })
        taskContainer.oncontextmenu = (e) => {
            showTaskMenu(e);
        }
        taskContainer.append(checkbox, newLi);

        taskList.append(taskContainer);
    }
}

const showTaskMenu = (e) => {
    alert(e);
    e.preventDefault();
}



const setupEventListeners = (() => {
    // setup adding new task to current project
    const setupTaskInputListener = (() => {
        const newTaskInput = document.querySelector(".add-task-input")

        newTaskInput.addEventListener("keyup", function (event) {
            if (event.key !== "Enter") return;
            const current = ProjectList.getCurrentProject()
            current.addTask(new Task(newTaskInput.value));
            newTaskInput.value = "";
            showTasks(current)
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
        addProjectInput.addEventListener("keyup", function (event) {
            if (event.key !== "Enter") return;
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
    ProjectList.setCurrentProject(whichProject)
    showTasks(whichProject)
    const userProjectBtn = document.createElement('button')
    userProjectBtn.addEventListener("click", () => {
        showTasks(whichProject)
    })
    userProjectBtn.textContent = whichProject.getName()
    return userProjectBtn
}
const defaultListeventListeners = (() => {
    const inboxDOM = document.querySelector(".inbox")
    const todayDOM = document.querySelector(".today")
    const upcomingDOM = document.querySelector(".upcoming")

    for (let i of [inboxDOM, todayDOM, upcomingDOM]) {
        i.addEventListener("click", () => {
            ProjectList.setCurrentProject(ProjectList.getProject(i.name))
            showTasks(ProjectList.getProject(i.name))
        })
    }
})()

export {
    setupEventListeners
}