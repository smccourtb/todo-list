import styled, { css } from "styled-components";
import darkIcon from "../images/icon-moon.svg";
import lightIcon from "../images/icon-sun.svg";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1em 0em;
  font-size: 0.75em;
  letter-spacing: 0.5em;
  color: white;
  margin-bottom: 3em;
`;

const ModeButton = styled.button`
  background: none;
  background-image: ${(props) =>
    props.mode ? css`url(${darkIcon})` : css`url(${lightIcon})`};
  border: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  height: 2em;
  width: 2em;
  cursor: pointer;
`;

export default function Header(props) {
  function changeMode() {
    props.setMode(!props.mode);
  }

  return (
    <Container>
      <h1>TODO</h1>
      <ModeButton onClick={changeMode} mode={props.mode ? 1 : 0}></ModeButton>
    </Container>
  );
}
