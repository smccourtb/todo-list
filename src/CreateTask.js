import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styled from 'styled-components';
import Checkbox from "./Checkbox";

const TaskInput = styled.input`
    font-family: 'Josefin Sans', sans-serif;
    background:none;
    border:none;
    margin:0;
    padding: 0;
    width:100%;
    caret-color: hsl(220, 98%, 61%);
    outline: none;
    color:hsl(234, 39%, 85%);
    line-height:2em;
    padding-top:.25em;

`

const Container = styled.div`
    display:flex;
    background:hsl(237, 14%, 26%);
    align-items:center;
    padding: .5em;
    width:100%;
    margin-bottom: 1em;
    font-size: .75em;
    border-radius:.33em;
`


function CreateTask({ state, setState }) {
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
        <Container>
            <Checkbox></Checkbox>
            <TaskInput type='text' placeholder="Create a new todo..." onKeyPress={handleKeyPress} onChange={handleChange}/>
        </Container>
    )
}

export default CreateTask;