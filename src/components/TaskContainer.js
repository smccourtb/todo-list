import "../styles/TaskContainer.css";
import Checkbox from "./Checkbox";
import Task from '../factories/Task';
import React, { useState } from 'react';

function TaskContainer({data, completeTask }) {
    
    const [task, setTask] = useState(data) 

    function handleClick() {
        setTask(prevTask => ({
            ...prevTask,
            completed: !task.completed
        }))
        console.log("TASK TO COMPLETE: ", data)
        completeTask(data)
    }   


    return(
        <div className='task-container' onClick={handleClick}>
            <Checkbox completed={data.completed} />
            <p className={`task-container__title ${data.completed ? "completed" : undefined}`}>{data.title}</p>
        </div>
    )
}

export default TaskContainer;