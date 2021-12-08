import "../styles/ProjectContainer.css";
import TaskContainer from "./TaskContainer";

function ProjectContainer({ project }) {

    const tasks = project.map((task) => <TaskContainer title={task.title}/>)
    
    return ( <div className="project-container">
        <ul>
            { tasks }
            <li className="task-container"><p>{project.length} items left</p><p>Clear Completed</p></li>
        </ul>
    </div>)
}

export default ProjectContainer;