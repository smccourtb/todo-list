import './styles/App.css';
import Task from "./factories/Task";
import ProjectContainer from './components/ProjectContainer';
import CreateTask from './components/CreateTask';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [project, setProject] = useState([Task("test 1", uuidv4()), Task("test 2", uuidv4()), Task("test 3", uuidv4())]);

  console.log("hi")
  return (
    <div className="App">
      <CreateTask setProject={setProject}/>
      <ProjectContainer project={project} setProject={setProject}/>
    </div>
  );
}

export default App;
