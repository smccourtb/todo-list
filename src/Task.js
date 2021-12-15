import { Draggable } from "react-beautiful-dnd";
import styled, {css} from 'styled-components'
import Checkbox from "./Checkbox";
import {useState} from 'react'
import img from "./images/icon-cross.svg"

const TaskItem = styled.div`
  font-size: .75em;
  display:flex;
  ${props => props.mode ? css `background: hsl(0, 0%, 98%)`: css `background: hsl(237, 14%, 26%)`};
  align-items:center;
  padding: .5em 1em;
  width:100%;
  ${props => props.mode ? css `border-bottom: 1px solid hsl(233, 11%, 84%);` : css `border-bottom: 1px solid hsl(233, 14%, 35%)`};
  ${props => props.completed ? css `color: hsl(234, 11%, 52%); text-decoration: line-through;` : css `color:hsl(234, 39%, 85%);`}
  &:first-child { border-radius: .33em .33em 0em 0em ;}
  height:4em;
`;

const TaskTitle = styled.p`
  margin-right: auto;
  ${props => props.mode ? css `color: hsl(235, 19%, 35%);` : css `color: hsl(234, 39%, 85%)`}
  ${'' /* font-weight: 700; */}
`
const Delete = styled.button`
  ${props => props.mode ? css `background: hsl(0, 0%, 98%)`: css `background: hsl(237, 14%, 26%)`};

  background-image: url(${img});
  border: none;
  background-position:center;
  background-repeat:no-repeat;
  background-size: auto;
  height: 2em;
  width: 2em;
  cursor:pointer;
`

export default function Task({ task, index , deleteTask, mode}) {
    const [state, setState] = useState(task.completed)
    function handleClick(){
        setState(task.completed = !task.completed)
    }
    
    return (
      <Draggable draggableId={task.id} index={index}>
        {provided => (
          <TaskItem
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={handleClick}
            completed={state}
            mode={mode ? 1 : 0}
          >
          <Checkbox completed={state}  mode={mode}/>
            <TaskTitle mode={mode ? 1 : 0}>{task.title}</TaskTitle>
          <Delete onClick={e => deleteTask(e, task.id) } mode={mode ? 1 : 0}></Delete>
          </TaskItem>
        )}
      </Draggable>
    );
  }