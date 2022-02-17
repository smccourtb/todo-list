import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import { useState } from "react";
import img from "../images/icon-cross.svg";

const TaskItem = styled.div`
  font-size: 0.75em;
  display: flex;
  background-color: ${({ theme }) => theme.containerBackgroundColor};
  align-items: center;
  padding: 0.5em 1em;
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.taskBorderColor}`};

  &:first-child {
    border-radius: 0.33em 0.33em 0 0;
  }

  height: 4em;
`;
const TaskTitle = styled.p`
  margin-right: auto;
  text-decoration: ${({ completed }) => completed && `line-through`};
  color: ${({ completed, theme }) =>
    completed ? `${theme.completeTextColor}` : `${theme.incompleteTextColor}`};
`;

const Delete = styled.button`
  background-color: ${({ theme }) => theme.containerBackgroundColor};
  background-image: url(${img});
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  height: 2em;
  width: 2em;
  cursor: pointer;
`;

export default function Task({ task, index, deleteTask, mode }) {
  const [state, setState] = useState(task.completed);
  function handleClick() {
    setState((prevState) => !prevState);
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <TaskItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={handleClick}
          completed={state}
          mode={mode ? 1 : 0}
        >
          <Checkbox completed={state} mode={mode} />

          <TaskTitle completed={state}>{task.title}</TaskTitle>
          <Delete onClick={(e) => deleteTask(e, task.id)} mode={mode ? 1 : 0} />
        </TaskItem>
      )}
    </Draggable>
  );
}
