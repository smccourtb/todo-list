import "../styles/ProjectContainer.css";
import TaskContainer from "./TaskContainer";
import { v4 as uuidv4 } from 'uuid';


function ProjectContainer({ project, setProject }) {
    console.log("PROJECT: ", project)
    const tasks = project.map((task) => <TaskContainer key={uuidv4()} data={task} completeTask={completeTask}/>)

    function deleteCompletedTasks() {
        const incompleteTasks = project.filter(task => !task.completed)
        setProject([...incompleteTasks])
    }

    function completeTask(taskToComplete) {
        let x = project.find(task => task === taskToComplete)
        x.completed = !x.completed
        setProject(project)
        console.log("AFTER: ",project)
        
        
    }

    return ( <div className="project-container">
        <ul>
            { tasks }
            <li className="task-container">
                <p>{project.length} items left</p>
                <button onClick={deleteCompletedTasks}>Clear Completed</button>
            </li>
        </ul>
    </div>)
}

export default ProjectContainer;