import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import Checkbox from "./Checkbox";

const TaskInput = styled.input`
  font-size: 1em;

  font-family: "Josefin Sans", sans-serif;
  background: none;
  border: none;
  width: 100%;
  caret-color: hsl(220, 98%, 61%);
  outline: none;
  color: ${({ theme }) => theme.createTaskTextColor};
  line-height: 2em;
  padding-top: 0.25em;
`;

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.containerBackgroundColor};
  align-items: center;
  padding: 0.5em 1em;
  width: 100%;
  margin-bottom: 1em;
  font-size: 0.75em;
  border-radius: 0.5em;
  height: 4em;
`;

function CreateTask({ setState, mode }) {
  const [value, setValue] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setState((prevState) => {
        const tasks = { ...prevState };
        const newTask = { id: uuidv4(), title: value, completed: false };
        tasks.tasks.push(newTask);
        return tasks;
      });

      setValue("");
      event.target.value = "";
    }
  };

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <Container mode={mode ? 1 : 0}>
      <Checkbox mode={mode ? 1 : 0} />
      <TaskInput
        type="text"
        placeholder="Create a new todo..."
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        mode={mode ? 1 : 0}
      />
    </Container>
  );
}

export default CreateTask;
