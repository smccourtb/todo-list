import ProjectContainer from "./ProjectContainer";
import Header from "./Header";
import "./index.css"
import CreateTask from "./CreateTask";
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styled, {css} from 'styled-components'
import mobileBgDark from "./images/bg-mobile-dark.jpg"
import mobileBgLight from "./images/bg-mobile-light.jpg"
import desktopBgDark from "./images/bg-desktop-dark.jpg";
import desktopBgLight from "./images/bg-desktop-light.jpg";

import { device } from "./device";

const Ap = styled.div`
  @media ${device.mobileL} {
    min-width: 40%;
  }
`
const Background = styled.div`
  font-family: 'Josefin Sans', sans-serif;
  height: 100vh;
  background: ${props => props.mode ? css `url(${mobileBgLight}) no-repeat, hsl(236, 33%, 92%)` : css `url(${mobileBgDark}) no-repeat, hsl(235, 21%, 11%)`} ;
  background-size:contain;
  padding: 1em;
  font-size: 18px;
  text-align: center;
  display:flex;
  flex-direction:column;
  align-items:center;

  @media ${device.mobileL} { 
    background: ${props => props.mode ? css `url(${desktopBgLight}) no-repeat, hsl(236, 33%, 92%)` : css `url(${desktopBgDark}) no-repeat, hsl(235, 21%, 11%)`} ;
    background-size: 100% 33%;
  }

  @media ${device.tablet} { 
    font-size:20px;
  }
`
const Footer = styled.h6`
    color: hsl(234, 11%, 52%);
    font-size: 14px;
    font-weight: 300;
    margin-top: 3em;
`

function App() {
  const[mode, setMode] = useState(false) // false = dark mode || true = light mode

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

  return (<Background mode={mode ? 1 : 0}>
            <Ap>
              <Header mode={mode} setMode={setMode}/>
              <CreateTask state={state} setState={setState} mode={mode}/>
              <ProjectContainer state={state} setState={setState} mode={mode}/>
              <Footer mode={mode ? 1 : 0}>Drag and drop to reorder list</Footer>
            </Ap>
          </Background>)
}

export default App;
