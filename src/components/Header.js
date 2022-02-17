import styled from "styled-components";
import ThemeToggle from "../ThemeToggle";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1em 0;
  font-size: 0.75em;
  letter-spacing: 0.5em;
  color: white;
  margin-bottom: 3em;
`;

const Heading = styled.h1`
  height: 100%;
`;

export default function Header({ toggleTheme }) {
  return (
    <Container>
      <Heading>TODO</Heading>
      <ThemeToggle toggleTheme={toggleTheme} />
    </Container>
  );
}
