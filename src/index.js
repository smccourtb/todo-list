import {
    loadProject,
    setupSavedProjects,
    showTasks
} from "./DOM.js"
import {
    Project
} from "./project.js";
import {
    ProjectList
} from "./project-list.js";

import './style.css';

const loadDefault = (showTasks(ProjectList.getCurrentProject()))
const setup = (setupSavedProjects())