<<<<<<< HEAD
import './styles/App.css';
import Task from "./factories/Task";
import ProjectContainer from './components/ProjectContainer';
import CreateTask from './components/CreateTask';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [project, setProject] = useState([Task("test 1", uuidv4()), Task("test 2", uuidv4()), Task("test 3", uuidv4())]);
  
  
  return (
    <div className="App">
      <CreateTask setProject={setProject}/>
      <ProjectContainer project={project} setProject={setProject}/>
      <p>Drag and drop to reorder list</p>
    </div>
  );
}

export default App;
=======
import ProjectContainer from "./ProjectContainer";
import Header from "./Header";
import "./index.css"
import CreateTask from "./CreateTask";
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
function App() {
    
        // creates and populates an initial task array
    const initial = Array.from({ length: 3 }, (v, k) => k).map(k => {
        const custom = {
        id: uuidv4(),
        title: `Task ${k}`,
        completed: false
        };
        return custom;
    });

    const [state, setState] = useState({ tasks: initial });

    return (<div>
        <Header/>
        <CreateTask state={state} setState={setState}/>
        <ProjectContainer state={state} setState={setState}/>
    </div>)
}

export default App;
>>>>>>> cb8f6ec (transfer project into this repository)
