import "../styles/TaskContainer.css";
import Checkbox from "./Checkbox";
import Task from '../factories/Task';
import { useState } from 'react';

function TaskContainer({ title }) {
    const [task, setTask] = useState(Task(title))    
    
    function handleClick() {
        setTask(prevTask => ({
            ...prevTask,
            completed: !prevTask.completed
        }))
    }
    
    return(
        <div className='task-container' onClick={handleClick}>
            <Checkbox completed={task.completed} />
            <p className={`task-container__title ${task.completed ? "completed" : undefined}`}>{task.title}</p>
        </div>
    )
}

export default TaskContainer;