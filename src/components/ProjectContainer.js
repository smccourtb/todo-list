import "../styles/ProjectContainer.css";
import TaskContainer from "./TaskContainer";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";


function ProjectContainer({ project, setProject }) {
    console.log("PROJECT: ", project)
    const [complete, setComplete] = useState([])
    const [incomplete, setIncomplete] = useState([])

    const tasks = project.map((task) => <TaskContainer key={uuidv4()} data={task} completeTask={completeTask}/>)


    function deleteCompletedTasks() {
        // const incompleteTasks = project.filter(task => !task.completed)
        setProject([...incomplete, ...project.filter(task => !task.completed)])
    }

    function completeTask(taskToComplete) {
        let x = project.find(task => task === taskToComplete)
        x.completed = !x.completed
        setProject(project)
    }

    function filter(e) {
        switch (e.target.textContent) {
            case "Active": 
                if (complete.length < 1) {
                    setComplete(project.filter(task => task.completed))
                }
                setProject( prevProject => ( [
                    ...prevProject.filter(task => !task.completed),
                    ...incomplete ])
                )
                return
            case "All": 
                setProject(prevProject => (
                    [
                       
                        ...complete,
                        ...incomplete
                    ]
                ))
                setComplete([])
                setIncomplete([])
                return
            case "Completed":
                if (incomplete.length < 1) {
                    setIncomplete(project.filter(task => !task.completed))
                }
                setProject( prevProject => ( [
                    ...prevProject.filter(task => task.completed),
                    ...complete ])
                )
                return

            default: return
        }
    }

    return ( <div className="project-container">
        <ul>
            { tasks }
            <li className="task-container">
                <p>{project.length} items left</p>
                <button className="clear-completed" onClick={deleteCompletedTasks}>Clear Completed</button>
            </li>
            <li className="task-container filter">
                <button onClick={filter}>All</button>
                <button onClick={filter}>Active</button>
                <button onClick={filter}>Completed</button>
            </li>
        </ul>
    </div>)
}

export default ProjectContainer;