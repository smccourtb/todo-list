import ProjectContainer from "./components/ProjectContainer";
import Header from "./components/Header";
import "./index.css";
import CreateTask from "./components/CreateTask";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled, { css } from "styled-components";

import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "styled-components/macro";

const Background = styled.div`
  font-family: "Josefin Sans", sans-serif;
  height: 100vh;
  background-image: ${({ theme }) => css`url(${theme.mobileBackgroundImage})`};
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.backgroundColor};
  background-size: contain;
  padding: 1em;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 425px) {
    background-image: ${({ theme }) => css`url(${theme.backgroundImage})`};
    background-repeat: no-repeat;
    background-size: 100% 33%;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;
const Footer = styled.h6`
  color: hsl(234, 11%, 52%);
  font-size: 14px;
  font-weight: 300;
  margin-top: 3em;
`;

// creates and populates an initial task array
const initial = Array.from({ length: 3 }, (element, index) => index).map(
  (k) => {
    return {
      id: uuidv4(),
      title: `Task ${k}`,
      completed: false,
    };
  }
);

const App = () => {
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [state, setState] = useState({ tasks: initial });

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Background>
        <main>
          <Header toggleTheme={themeToggler} />
          <CreateTask setState={setState} />
          <ProjectContainer state={state} setState={setState} />
          <Footer>Drag and drop to reorder list</Footer>
        </main>
      </Background>
    </ThemeProvider>
  );
};

export default App;
