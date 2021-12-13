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
        const incompleteTasks = project.filter(task => !task.completed)
        setComplete([])
        setProject([...incompleteTasks])
    }

    function completeTask(taskToComplete) {
        let x = project.find(task => task === taskToComplete)
        x.completed = !x.completed
        setProject(project)
        setComplete([...project.filter(task => task.completed)])
        setIncomplete([...project.filter(task => !task.completed)])

    }

    function filter(e) {
        switch (e.target.textContent) {
            case "Active":
                setProject( [
                    ...incomplete ])
                
                return
            case "All": 
                setProject(prevProject => (
                    [
                       
                        ...complete,
                        ...incomplete
                    ]
                ))
                // setComplete([])
                // setIncomplete([])
                return
            case "Completed":
                setProject( [
                    ...complete ])
                
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
            <div className="filter-container">
                <button className="filter-btn" onClick={filter}>All</button>
                <button className="filter-btn" onClick={filter}>Active</button>
                <button className="filter-btn" onClick={filter}>Completed</button>
            </div>
        </ul>
    </div>)
}

export default ProjectContainer;