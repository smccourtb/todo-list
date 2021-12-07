import "../styles/TaskContainer.css";
import Checkbox from "./Checkbox";
import Task from '../factories/Task';
import { useState } from 'react';

function TaskContainer() {
    const [task, setTask] = useState(Task())
    console.log(task)
    return(
        // <div className="task-container">
        //     <label class="task-container__form-control">
        //         <input type="checkbox" name="checkbox" />
        //         <p className="task-container__title">Checkbox</p>
        //     </label>
        // </div>
        <Checkbox />
    )
}

export default TaskContainer;