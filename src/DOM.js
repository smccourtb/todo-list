import {
    Task
} from "./task.js"
import {
    Project
} from "./project.js"
import {
    ProjectList
} from "./project-list.js"

class TaskComponent {
    constructor(task) {
        this.task = task;
    }
    createTaskContainer = () => {
        const taskContainer = document.createElement("div"); // houses the individual task
        taskContainer.classList.add("task-container");
        taskContainer.oncontextmenu = (e) => {
            showTaskMenu(e);
        }
        // event listeners
        taskContainer.addEventListener("click", () => {
            taskContainer.classList.toggle("task-container-clicked")
            TaskPreview(task, document.querySelector(".task-title"), project)
        })
        return taskContainer
    }
}
const setupTaskContainer = (project, task) => {

    const createTaskContainer = () => {
        const taskContainer = document.createElement("div"); // houses the individual task
        taskContainer.classList.add("task-container");
        taskContainer.oncontextmenu = (e) => {
            showTaskMenu(e);
        }
        // event listeners
        taskContainer.addEventListener("click", () => {
            taskContainer.classList.toggle("task-container-clicked")
            TaskPreview(task, document.querySelector(".task-title"), document.querySelector(`checkbox-${task.getPriority()}`), project)
        })
        return taskContainer
    }

    const createCheckbox = () => {
        const checkboxContainer = document.createElement("div")
        checkboxContainer.classList.add(`checkbox-${task.getPriority()}`)
        const checkbox = document.createElement("input"); // checkbox for tasks
        checkbox.setAttribute("name", `checkbox-${task.getPriority()}`)
        const label = document.createElement("label")
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener("click", (e) => {
            e.stopPropagation()
            if (checkbox.checked) {
                task.markComplete()
                project.addToCompleted(task)
                project.removeTask(task)
                showTasks(project)
            }
        })
        label.append(checkbox)
        checkboxContainer.append(label)

        return checkboxContainer
    }

    const createTaskTitle = () => {
        const taskTitle = document.createElement("li"); // task title
        taskTitle.classList.add("task-title")
        taskTitle.textContent = task.getTitle();
        return taskTitle
    }

    const createDeleteTaskButton = (project, task) => {
        const deleteButton = document.createElement("button")
        deleteButton.classList.add("task-delete-button")
        deleteButton.classList.add("material-icons")
        deleteButton.innerHTML = "delete_outline"
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation()
            project.removeTask(task)
            showTasks(project)
        })
        return deleteButton
    }

    const setup = () => {
        const taskGroup = document.createElement('div') // houses checkbox and taskTitle for spacing reasons

        taskGroup.classList.add("task-group")
        const checkbox = createCheckbox()
        const taskTitle = createTaskTitle()

        taskGroup.append(checkbox, taskTitle)
        const taskContainer = createTaskContainer();

        const deleteButton = createDeleteTaskButton(project, task)
        taskContainer.append(taskGroup, deleteButton);
        return taskContainer
    }


    return setup()
}


const TaskPreview = (task, hm, checkboxContainerNode, project) => {
    const taskPreview = document.querySelector(".task-preview-content");

    const setupHeader = () => {
        const header = document.createElement("div")
        header.classList.add("task-preview-header")
        const priority = setupPriority()

        const dueDate = setupDueDate();
        header.append(priority, dueDate)
        return header

    }
    const setupDueDate = () => {
        const date = document.createElement("button")
        date.classList.add("material-icons")
        date.textContent = "date_range"
        return date
    }
    const setupPriority = () => {
        const priorityButton = document.createElement("button")
        priorityButton.classList.add("material-icons")
        priorityButton.classList.add("priority-button")
        priorityButton.textContent = "priority_high"



        priorityButton.addEventListener("click", () => {
            const popup = createPriorityPopup()
            priorityButton.append(popup)
        })
        return priorityButton
    }

    const createPriorityPopup = () => {
        const options = ["high", "medium", "low", "none"]
        const popupContainer = document.createElement("div")
        popupContainer.classList.add("priority-popup-container")

        for (let i = 0; i < 4; i++) {
            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("priority-popup-button-container");
            const button = document.createElement("button");
            const label = document.createElement("div");
            label.classList.add("priority-label")
            label.textContent = options[i];
            button.classList.add("material-icons")
            button.classList.add(options[i])
            button.textContent = "priority_high"
            buttonContainer.addEventListener("click", (e) => {
                // checkboxContainerNode.classList.replace(`checkbox-${task.getPriority()}`, `checkbox-${options[i]}`)
                task.setPriority(options[i])



            })
            buttonContainer.append(button, label)
            popupContainer.append(buttonContainer)
        }
        popupContainer.addEventListener("click", (e) => {
            e.stopPropagation()
            popupContainer.remove()
        })
        return popupContainer
    }

    const setupTitle = () => {
        const taskPreviewTitle = document.createElement("h3");
        taskPreviewTitle.textContent = task.getTitle();
        taskPreviewTitle.classList.add("task-preview-title");
        taskPreviewTitle.addEventListener("click", () => {
            changeTitle()
        })
        return taskPreviewTitle
    }

    const changeTitle = () => {
        const taskTitleChange = document.createElement('input')
        taskTitleChange.classList.add("task-preview-title-input")
        const taskTitle = document.querySelector(".task-preview-title")
        taskTitleChange.setAttribute('type', "text")
        taskTitleChange.setAttribute('placeholder', task.getTitle())
        taskTitleChange.addEventListener("keyup", function (event) {
            if (event.key !== "Enter") return;
            if (taskTitleChange.value === "") return;
            task.setTitle(taskTitleChange.value)
            taskTitle.textContent = task.getTitle()
            document.activeElement.blur();
            taskPreview.replaceChild(taskTitle, taskTitleChange)
            hm.textContent = task.getTitle()
        })
        taskTitleChange.addEventListener("focusout", () => {
            if (taskTitleChange.value === "") return;
            task.setTitle(taskTitleChange.value)
            taskTitle.textContent = task.getTitle()
            document.activeElement.blur();
            hm.textContent = task.getTitle()

        })
        // taskPreview.insertBefore(taskTitleChange, description)
        taskPreview.replaceChild(taskTitleChange, taskTitle)
        taskTitleChange.focus()

    }

    const setupDescription = () => {
        const descriptionText = document.createElement("textarea");
        descriptionText.classList.add("description-text")
        descriptionText.setAttribute("placeholder", "Description")
        descriptionText.addEventListener("keyup", function (event) {
            if (event.key !== "Enter") return;
            task.setDescription(descriptionText.value);
            descriptionText.value = task.getDescription()
            document.activeElement.blur();
        })
        if (task.getDescription()) {
            descriptionText.value = task.getDescription()
        }
        return descriptionText
    }

    const setup = (() => {
        taskPreview.replaceChildren()
        taskPreview.append(setupHeader())
        taskPreview.append(setupTitle(), setupDescription());
    })()
}





const showTasks = (project) => {
    const taskPreview = document.querySelector(".task-preview-content")
    // clear out the task list container to start fresh
    taskPreview.replaceChildren()
    const taskList = document.querySelector(".task-list"); // the ol element
    const projectTitle = document.querySelector(".project-title")
    // set title of project
    projectTitle.textContent = project.getName();
    //clear tasks
    taskList.replaceChildren();
    //switch current project to the one that was clicked
    if (project.taskList.length > 0) {
        for (let task of project.taskList) {
            const taskContainer = setupTaskContainer(project, task) // houses the individual task
            taskList.append(taskContainer);
        }
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
}



const setupEventListeners = (() => {
    // setup adding new task to current project
    const setupTaskInputListener = (() => {
        const newTaskInput = document.querySelector(".add-task-input")

        newTaskInput.addEventListener("keyup", function (event) {
            if (event.key !== "Enter") return;
            const current = ProjectList.getCurrentProject()
            console.log("THIS IS THE CURRENT PROJECT: ", current)
            current.addTask(new Task(newTaskInput.value));
            window.localStorage.setItem(current.getName(), JSON.stringify(current))
            console.log("AFTER CREATING NEW TASK: ", window.localStorage.getItem(current.getName()))

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
            window.localStorage.setItem(project.getName(), JSON.stringify(project))
            console.log("AFTER SUBMITTING A NEW PROJECT: ", window.localStorage.getItem(project.getName()))
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
    let projects = [inboxDOM, todayDOM, upcomingDOM]


    for (let i of projects) {
        i.addEventListener("click", () => {
            ProjectList.setCurrentProject(ProjectList.getProject(i.name))
            showTasks(ProjectList.getCurrentProject())
        })
    }
})()

const setupSavedProjects = () => {
    for (let p = 3; p < ProjectList.projectList.length; p++) {
        const userProjectBtn = document.createElement('button')
        userProjectBtn.addEventListener("click", () => {
            showTasks(ProjectList.projectList[p])
        })
        userProjectBtn.textContent = ProjectList.projectList[p].getName()


        const nav = document.querySelector("nav")
        nav.append(userProjectBtn)
    }
}


export {
    setupEventListeners,
    showTasks,
    setupSavedProjects
}