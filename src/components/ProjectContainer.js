import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled, { css } from "styled-components";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Task from "./Task";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.containerBackgroundColor};

  width: 100%;
  border-radius: 0.33em 0.33em 0 0;
  height: 18em;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const FilterContainer = styled.div`
  margin-top: 1em;
  display: flex;
  height: 2.75em;
  background-color: ${({ theme }) => theme.containerBackgroundColor};

  align-items: center;
  justify-content: space-evenly;
  padding: 0.5em 2em;
  width: 100%;

  border-radius: 0.25em;
`;

const FilterButton = styled.button`
  background: none;
  font-weight: 700;
  font-size: 0.85em;
  border: none;
  margin: 0 1em;
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
  color: hsl(234, 11%, 52%);
  transition: all 0.2s ease-out;
  &:hover {
    color: white;
  }
  ${(props) =>
    props.active &&
    css`
      color: hsl(220, 98%, 61%);
    `}
`;

const ContainerFooter = styled.footer`
  display: flex;
  background-color: ${({ theme }) => theme.containerBackgroundColor};
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1.5em;
  width: 100%;
  font-size: 0.75em;
  height: 4em;
  color: hsl(234, 11%, 52%);
  border-radius: 0 0 0.25em 0.25em;
`;

const ClearButton = styled.button`
  background: none;
  outline: none;
  color: hsl(234, 11%, 52%);
  font-family: "Josefin Sans", sans-serif;
  cursor: pointer;
  border: none;
  &:hover {
    color: hsl(236, 33%, 92%);
  }
  transition: color 0.2s ease-out;
`;
export default function ProjectContainer(props) {
  const [state, setState] = useState("All");
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  function filter(e) {
    switch (e.target.textContent) {
      case "Active":
        setState("Active");
        return;
      case "All":
        setState("All");
        return;
      case "Completed":
        setState("Completed");
        return;
      default:
        return;
    }
  }

  function deleteTask(e, id) {
    e.stopPropagation();
    const t = { ...props.state };
    const tasks = t.tasks.filter((task) => id !== task.id);
    props.setState({ tasks: tasks });
  }

  function clearCompleted() {
    const t = { ...props.state };
    const tasks = t.tasks.filter((task) => !task.completed);
    props.setState({ tasks });
  }

  const TaskList = React.memo(function TaskList({ tasks }) {
    return tasks.map((task, index) => (
      <Task
        task={task}
        index={index}
        key={task.id}
        deleteTask={deleteTask}
        mode={props.mode}
      />
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
          {(provided) => (
            <Container
              ref={provided.innerRef}
              {...provided.droppableProps}
              mode={props.mode ? 1 : 0}
            >
              <TaskList
                tasks={
                  state === "All"
                    ? props.state.tasks
                    : state === "Active"
                    ? props.state.tasks.filter((task) => !task.completed)
                    : props.state.tasks.filter((task) => task.completed)
                }
              />
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>

      <ContainerFooter mode={props.mode ? 1 : 0}>
        {/*TODO: update to read uncompleted tasks instead of all tasks*/}
        <p>{`${props.state.tasks.length} items left`}</p>
        {isTablet && (
          <div>
            <FilterButton active={state === "All"} onClick={filter}>
              All
            </FilterButton>
            <FilterButton active={state === "Active"} onClick={filter}>
              Active
            </FilterButton>
            <FilterButton active={state === "Completed"} onClick={filter}>
              Completed
            </FilterButton>
          </div>
        )}
        <ClearButton onClick={clearCompleted}>Clear Completed</ClearButton>
      </ContainerFooter>

      {!isTablet && (
        <FilterContainer mode={props.mode ? 1 : 0}>
          <FilterButton active={state === "All"} onClick={filter}>
            All
          </FilterButton>
          <FilterButton active={state === "Active"} onClick={filter}>
            Active
          </FilterButton>
          <FilterButton active={state === "Completed"} onClick={filter}>
            Completed
          </FilterButton>
        </FilterContainer>
      )}
    </div>
  );
}
