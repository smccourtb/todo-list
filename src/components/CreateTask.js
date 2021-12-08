import "../styles/CreateTask.css";
import Task from "../factories/Task";
import { useState } from 'react';

function CreateTask({ setProject }) {
    const [value, setValue] = useState("");

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          setProject((prevProject) => (
              [
                  ...prevProject,
                  Task(value)
              ]
          ))
          setValue("")
          event.target.value = ""
        }
      }
    
      function handleChange(event){
          setValue((event.target.value))
      }

    return (
        <div className="task-container">
            <input type='text' placeholder="Create a new todo..." onKeyPress={handleKeyPress} onChange={handleChange}/>
        </div>
    )
}

export default CreateTask;