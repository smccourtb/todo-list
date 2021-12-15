import ProjectContainer from "./ProjectContainer";
import Header from "./Header";
import "./index.css"
import CreateTask from "./CreateTask";
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styled, {css} from 'styled-components'
import bgDark from "./images/bg-mobile-dark.jpg"
import bgLight from "./images/bg-mobile-light.jpg"


const Background = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  height: 100vh;
  background: ${props => props.mode ? css `url(${bgLight}) no-repeat, hsl(236, 33%, 92%)` : css `url(${bgDark}) no-repeat, hsl(235, 21%, 11%)`} ;
  padding: 1em;
  font-size: 18px;
`
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
    const[mode, setMode] = useState(false) // false = dark mode || true = light mode
    const [state, setState] = useState({ tasks: initial });

    return (<Background mode={mode ? 1 : 0}>
        <Header mode={mode} setMode={setMode}/>
        <CreateTask state={state} setState={setState} mode={mode}/>
        <ProjectContainer state={state} setState={setState} mode={mode}/>
    </Background>)
}

export default App;
