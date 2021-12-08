import './styles/App.css';
import Task from "./factories/Task";
import ProjectContainer from './components/ProjectContainer';
import CreateTask from './components/CreateTask';
import { useState } from 'react';
function App() {
  const [project, setProject] = useState([Task("test 1"), Task("test 2"), Task("test 3")]);

  return (
    <div className="App">
      <CreateTask setProject={setProject}/>
      <ProjectContainer project={project}/>
    </div>
  );
}

export default App;
