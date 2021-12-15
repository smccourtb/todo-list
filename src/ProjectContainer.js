import React from 'react';
import { DragDropContext, Droppable} from "react-beautiful-dnd";
import styled, {css} from 'styled-components';
import {useState} from 'react'

import Task from "./Task";

const Container = styled.div`
  display:flex;
  align-items: center;
  flex-direction: column;
  ${props => props.mode ? css `background: hsl(0, 0%, 98%);` : css `background:hsl(237, 14%, 26%);`};
  width: 100%;
  border-radius: .33em .33em 0em 0em;
  height:18em;
  overflow:scroll;
`

const FilterContainer = styled.div`
  margin-top : 1em;
  display:flex;
  height:2.75em;
  ${props => props.mode ? css `background: hsl(0, 0%, 98%);` : css `background:hsl(237, 14%, 26%);`};

  align-items:center;
  justify-content: space-evenly;
  padding: .5em 2em;
  width:100%;
  
  
  border-radius: .25em;
`

const FilterButton = styled.button`
  background: none;
  font-weight: 700;
  font-size: .85em;
  border:none;
  margin:0em 1em;
  font-family: 'Josefin Sans', sans-serif;
  cursor: pointer;
  color: hsl(234, 11%, 52%);
  transition: all .2s ease-out;
  &:hover {color: white;}
  ${props => props.active && css `color:hsl(220, 98%, 61%);`}
`

const ContainerFooter = styled.footer`
  display:flex;
  ${props => props.mode ? css `background: hsl(0, 0%, 98%);` : css `background:hsl(237, 14%, 26%);`};

  align-items:center;
  justify-content: space-between;
  padding: .5em 1.5em;
  width:100%;
  font-size: .75em;
  height: 4em;
  color: hsl(234, 11%, 52%);
  border-radius: 0em 0em .25em .25em;
`

const ClearButton = styled.button`
  background:none;
  outline:none;
  color: hsl(234, 11%, 52%);
  font-family: 'Josefin Sans', sans-serif;
  cursor:pointer;
  border:none;
  &:hover {color:hsl(236, 33%, 92%); }
  transition:color .2s ease-out;
`
export default function ProjectContainer(props) {
  const [state, setState] = useState("All")

  function filter(e) {
    switch (e.target.textContent) {
      case "Active":
        setState("Active") 
          return
      case "All": 
        setState("All") 
          return
      case "Completed":
        setState("Completed") 
          return
      default: return
    }
  }

  function deleteTask(e, id){
    e.stopPropagation()
    const t = {...props.state}
    const tasks = t.tasks.filter(task => id !== task.id) 
    props.setState({tasks: tasks})
  }

  function clearCompleted() {
    const t = {...props.state}
    const tasks = t.tasks.filter(task => !task.completed)
    props.setState({tasks})
  }

  const TaskList = React.memo(function TaskList({ tasks }) {
    return tasks.map((task, index) => (
      <Task task={task} index={index} key={task.id} deleteTask={deleteTask} mode={props.mode}/>
    ));
  });

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };

    function onDragEnd(result) {
      if (!result.destination) {
        return;
      }
  
      if (result.destination.index === result.source.index) {
        return;
      }
  
      const tasks = reorder(
        props.state.tasks,
        result.source.index,
        result.destination.index
      );
  
      props.setState({ tasks: tasks });
    }

    return (
        <div>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
              {provided => (
                <Container ref={provided.innerRef} {...provided.droppableProps} mode={props.mode ? 1 : 0} >
                  <TaskList tasks={state === "All" ? 
                                  props.state.tasks : 
                                  state === "Active" ? 
                                  props.state.tasks.filter(task => !task.completed) :
                                  props.state.tasks.filter(task => task.completed)}
                                  />
                  {provided.placeholder}
                </Container>
              )}
            </Droppable>
          </DragDropContext>
          <ContainerFooter mode={props.mode ? 1 : 0}>
            <p>{`${props.state.tasks.length} items left`}</p>
            <ClearButton onClick={clearCompleted}>Clear Completed</ClearButton>
          </ContainerFooter>
          <FilterContainer mode={props.mode ? 1 : 0}>
            <FilterButton active={state==="All"} onClick={filter}>All</FilterButton>
            <FilterButton active={state==="Active"} onClick={filter}>Active</FilterButton>
            <FilterButton active={state==="Completed"} onClick={filter}>Completed</FilterButton>
          </FilterContainer>
        </div>
    );
  }