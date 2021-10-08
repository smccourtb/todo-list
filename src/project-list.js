// used to store all of the individual projects
import {
    Project
} from "./project.js"
import {
    Task
} from "./task.js"

// create a housing for all of the projects. Used a module function because we only need one
// and we need it right away during setup

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
        // add them to the project list
        for (let project of defaultProjects) {
            addProject(project);
            // adds an example task to project "Inbox"
            if (project.getName() === "Inbox") {
                const newTask = new Task("buy more milk.")
                project.addTask(newTask)
            }
            setCurrentProject(projectList[0])
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

console.log(ProjectList)
export {
    ProjectList
}