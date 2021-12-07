import "../styles/CreateTask.css";
import Task from "../factories/Task";

function CreateTask() {
    return (
        <div>
            <input type='text' placeholder="Create a new todo..."/>
        </div>
    )
}

export default CreateTask;