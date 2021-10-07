import {addProject, addNewTask, loadProject} from "./DOM.js"
import { Project } from "./project.js";
import './style.css';

const boo = (() => {
    addProject()
    const inbox = Project("Inbox")
    addNewTask(inbox)
    loadProject(inbox)
    console.log(inbox)
})();

