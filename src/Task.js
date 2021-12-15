import { Draggable } from "react-beautiful-dnd";
import styled, {css} from 'styled-components'
import Checkbox from "./Checkbox";
import {useState} from 'react'
import img from "./images/icon-cross.svg"

const TaskItem = styled.div`
  font-size: .75em;
  display:flex;
  background:hsl(237, 14%, 26%);
  align-items:center;
  padding: .5em 1em;
  width:100%;
  border-bottom: 1px solid hsl(233, 14%, 35%);
  ${props => props.completed ? css `color: hsl(234, 11%, 52%); text-decoration: line-through;` : css `color:hsl(234, 39%, 85%);`}
  &:first-child { border-radius: .33em .33em 0em 0em ;}
  ${'' /* &:last-child { border-radius: 0em 0em .33em .33em; border-bottom:none;} */}
  height:4em;
`;

const TaskTitle = styled.p`
  margin-right: auto;
`
const Delete = styled.button`
  background: hsl(237, 14%, 26%); 
  background-image: url(${img});
  border: none;
  background-position:center;
  background-repeat:no-repeat;
  background-size: auto;
  height: 2em;
  width: 2em;
`

export default function Task({ task, index , deleteTask}) {
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
          >
          <Checkbox completed={state}  />
            <TaskTitle>{task.title}</TaskTitle>
          <Delete onClick={e => deleteTask(e, task.id)}></Delete>
          </TaskItem>
        )}
      </Draggable>
    );
  }