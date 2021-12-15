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
