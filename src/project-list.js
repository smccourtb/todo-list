// used to store all of the individual projects
import {
    Project
} from "./project.js"
import {
    Task
} from "./task.js"

// create a housing for all of the projects. Used a module function because we only need one
// and we need it right away during setup
const parseSavedProject = (projectData) => {
    const project = Project(projectData.name)
    for (let i of projectData.taskList) {
        console.log("THIS IS I: ", i)
        const task = new Task(i.title, i.complete, i.priority)
        console.log("THIS IS BUILT TASK: ", task)
        project.taskList.push(task)
    }
    project.completedTasks = projectData.completedTasks

    return project
}
const ProjectList = (() => {
    let projectList = [];
    let currentProject = projectList[0]
    const addProject = name => {
        projectList.push(name);
    }
    const removeProject = projectName => {
        const t = projectList.indexOf(projectName);
        projectList.splice(t, 1);
    }
    const setCurrentProject = (project) => {
        currentProject = project;
    }
    const getCurrentProject = () => {
        return currentProject;
    }
    const getProject = projectName => {
        for (let project of ProjectList.projectList) {
            if (project.getName() === projectName) {
                return project;
            }
        };
    }
    const defaultListSetup = (() => {
        // create 3 default projects
        const inbox = Project("Inbox") //default project on load
        const today = Project("Today");
        const upcoming = Project("Upcoming")
        const defaultProjects = [inbox, today, upcoming];
        // adds an example task to project "Inbox"
        const newTask = new Task("buy more milk.")
        inbox.addTask(newTask)

        // if no save data add the default projects to save data
        if (window.localStorage.length < 1) {
            for (let project of defaultProjects) {

                window.localStorage.setItem(project.getName(), JSON.stringify(project))
            }
        }

        // load other projects and add to tasklist
        for (let i = 0; i < window.localStorage.length; i++) {
            const project = JSON.parse(window.localStorage.getItem([window.localStorage.key(i)]))

            const x = parseSavedProject(project)
            addProject(x);
            setCurrentProject(projectList[1])
        }


    })()
    return {
        currentProject,
        projectList,
        addProject,
        removeProject,
        getProject,
        setCurrentProject,
        getCurrentProject
    }
})();

export {
    ProjectList
}

console.log(ProjectList)