// used to store all of the individual projects
import {Project} from "./project.js"

const ProjectList = (() => {
    let projectList = [];
    const addProject = name => {
        // const projectToAdd = Project(name);
        projectList.push(name);
    }
    const removeProject = projectName => {
        const t = projectList.indexOf(projectName);
        projectList.splice(t, 1);
    }
    const defaultListSetup = (() => {
        const inbox = Project("Inbox") //default project on load
        const today = Project("Today");
        const upcoming = Project("Upcoming")
        const defaultProjects = [inbox, today, upcoming];
        for(let project of defaultProjects) {
            addProject(project);
        }
        
    })()
    return {projectList, addProject, removeProject}
})();

console.log(ProjectList.projectList)


export {ProjectList}