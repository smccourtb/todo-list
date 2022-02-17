import React from "react";
import { func } from "prop-types";
import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  background: ${({ theme }) => css`url(${theme.modeIcon})`} no-repeat center;
  background-size: auto;
  height: 2em;
  width: 2em;
  cursor: pointer;
`;

const ThemeToggle = ({ toggleTheme }) => {
  return <Button onClick={toggleTheme} />;
};

ThemeToggle.propTypes = {
  toggleTheme: func.isRequired,
};

export default ThemeToggle;
