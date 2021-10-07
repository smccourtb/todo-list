// used to store all of the individual projects
import {Project} from "./project.js"

const ProjectList = (() => {
    let projectList = [];
    const addProject = name => {
        const projectToAdd = Project(name);
        projectList.push(projectToAdd);
    }
    const removeProject = projectName => {
        const t = projectList.indexOf(projectName);
        projectList.splice(t, 1);
    }
})()

export {ProjectList}