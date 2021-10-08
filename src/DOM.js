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
    const taskPreview = document.querySelector(".task-preview-content")
    taskPreview.replaceChildren()
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
        taskContainer.setAttribute("name", task.getTitle())
        const taskName = taskContainer.getAttribute("name")
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
        taskContainer.addEventListener("click", () => {
            taskContainer.classList.toggle("task-container-clicked")

            const x = document.getElementsByClassName(".task-container-clicked")
            console.log(x)
            const task = taskInfo(project, taskName);
            const taskPreview = document.querySelector(".task-preview-content");
            taskPreview.replaceChildren()
            const taskPreviewTitle = document.createElement("h3");

            const descriptionText = document.createElement("textarea")
            descriptionText.classList.add("description-text")
            descriptionText.setAttribute("placeholder", "Description")
            descriptionText.addEventListener("keyup", function (event) {
                if (event.key !== "Enter") return;
                task.setDescription(descriptionText.value);
                alert(task.getDescription());
            })

            taskPreviewTitle.textContent = task.getTitle();
            taskPreviewTitle.classList.add("task-preview-title");
            taskPreviewTitle.addEventListener("click", () => {
                const taskTitleChange = document.createElement('input')
                taskTitleChange.classList.add("task-preview-title-input")
                const taskTitle = document.querySelector(".task-preview-title")
                const description = document.querySelector(".description-text")
                taskTitleChange.setAttribute('type', "text")
                taskTitleChange.setAttribute('placeholder', task.getTitle())
                taskTitleChange.addEventListener("keyup", function (event) {
                    if (event.key !== "Enter") return;
                    if (taskTitleChange.value === "") return;
                    task.setTitle(taskTitleChange.value)
                })
                taskPreview.removeChild(taskTitle)
                taskPreview.insertBefore(taskTitleChange, description)


            })
            if (task.getDescription()) {
                descriptionText.value = task.getDescription()
            }
            taskPreview.append(taskPreviewTitle, descriptionText);
        })




        taskContainer.append(checkbox, newLi);

        taskList.append(taskContainer);


    }
}
const taskInfo = (project, taskName) => {
    const task = project.getTaskInfo(taskName)
    return task;

}
const showTaskMenu = (e) => {
    // make a pop up div
    //OPTIONS
    // rename
    // delete
    // change priority
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