import styled, { css } from "styled-components";
import img from "../images/icon-check.svg";

const Border = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75em;
  height: 1.75em;
  ${(props) =>
    props.mode
      ? css`
          background: hsl(233, 11%, 84%);
        `
      : css`
          background: hsl(233, 14%, 35%);
        `};
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  border-radius: 50%;
`;

const Inner = styled.div`
  width: 1.6em;
  height: 1.6em;
  border-radius: 50%;
  ${(props) =>
    props.mode
      ? css`
          background: hsl(0, 0%, 98%);
        `
      : css`
          background: hsl(237, 14%, 26%);
        `};
  ${(props) =>
    props.done &&
    css`
      background-image: url(${(props) => props.img}),
        linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    `}
  background-position:center;
  background-repeat: no-repeat;
  background-size: auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 1em 1.25em 0em;
  &:hover ${Border} {
    background: linear-gradient(
      135deg,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
  }
`;

function Checkbox({ completed, mode }) {
  return (
    <Container>
      <Border mode={mode ? 1 : 0}>
        <Inner img={img} done={completed} mode={mode ? 1 : 0}></Inner>
      </Border>
    </Container>
  );
}

export default Checkbox;
