import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styled, { css } from 'styled-components';
import Checkbox from "./Checkbox";

const TaskInput = styled.input`
    font-family: 'Josefin Sans', sans-serif;
    background:none;
    border:none;
    width:100%;
    caret-color: hsl(220, 98%, 61%);
    outline: none;
    ${props => props.mode ? css `color: hsl(235, 19%, 35%);` : css `color:hsl(234, 39%, 85%);`}
    line-height: 2em;
    padding-top: .25em;

`

const Container = styled.div`
    display: flex;
    ${props => props.mode ? css `background: hsl(0, 0%, 98%);` : css `background:hsl(237, 14%, 26%);`};

    align-items: center;
    padding: .5em 1em;
    width: 100%;
    margin-bottom: 1em;
    font-size: .75em;
    border-radius: .5em;
    height: 4em;
`


function CreateTask({ state, setState, mode }) {
    const [value, setValue] = useState("");

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          setState((prevState) => {
              let tasks = {...prevState}
              let newTask = {id:uuidv4(), title:value, completed:false}
              tasks.tasks.push(newTask)
              return tasks
            }, console.log(state))

          setValue("")
          event.target.value = ""
        }
      }
    
      function handleChange(event){
          setValue((event.target.value))
      }

    return (
        <Container mode={mode ? 1 : 0}>
            <Checkbox mode={mode ? 1 : 0}></Checkbox>
            <TaskInput type='text' placeholder="Create a new todo..." onKeyPress={handleKeyPress} onChange={handleChange} mode={mode ? 1 : 0}/>
        </Container>
    )
}

export default CreateTask;